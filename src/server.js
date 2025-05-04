require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Svetaine';

app.use(
  cors({
    origin: 'http://localhost:3001', // arba '*' jei norite leisti visiems
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// 2) Middleware’ai – JSON & URL-encoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) Maršrutai
const formRouter = require('./routes/form');
app.use('/api/form', formRouter);

// 4) Static failų servinimas ir maršrutai
app.use(express.static(path.join(__dirname, '../')));

// Pagrindinis maršrutas 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// 404 maršrutas
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../404.html'));
});

// 5) Start Mongoose + Express
async function start() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✔️ Prijungta prie MongoDB (via mongoose)');

    // po sėkmingo connect – paleidžiam testą
    await testMongoDb();

    app.listen(port, () => {
      console.log(`🚀 Serveris veikia http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ DB jungtis nepavyko:', err);
    process.exit(1);
  }
}

//backend serveris sėkmingai prisijungtų prie MongoDB duomenų bazės ir galėtų atlikti CRUD operacijas.
async function testMongoDb() {
  try {
    // pereinam prie 'config' DB
    const configConn = mongoose.connection.useDb('config');

    // sukuriam modelį 'test' kolekcijai
    const testSchema = new mongoose.Schema({
      _id: { type: String, required: true },
      test: { type: String, required: true }
    }, {
      collection: 'test'
    });
    const Test = configConn.model('Test', testSchema);

    // Patikriname dokumentą su _id = '1'
    const doc = await Test.findById('1');
    if (!doc) {
      console.warn('⚠️ Nerastas įrašas su _id=1');
      return;
    }

    // Tikriname ar test laukas lygus 'test'
    if (doc.test === 'test') {
      console.log('✅ MongoDB CRUD testas sėkmingas!');
    } else {
      console.warn(`⚠️ Neatitikimas: MongoDB CRUD teste -> „test“ laukas nėra „test“, rasta: ${doc.test}`);
    }
  } catch (err) {
    console.error('❌ testMongoDb klaida:', err);
  }
}
start();

