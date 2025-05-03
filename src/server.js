// src/index.js
require('dotenv').config();
const express      = require('express');
const path         = require('path');
const { MongoClient } = require('mongodb');

const app  = express();
const port = process.env.PORT || 3000;

// 1) MongoDB prisijungimo URI
// Sukurk .env faile (repo šaknyje):
// MONGO_URI=mongodb://127.0.0.1:27017/Svetaine
const uri    = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Svetaine';
const client = new MongoClient(uri, {});

// Vietoje kintamojo laikysime kolekcijos nuorodą
let formCollection;

// 2) Middleware’ai – JSON & URL-encoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) POST endpoint’as formos duomenims
app.post('/api/form', async (req, res) => {
  try {
    const { vardas, email, message } = req.body;
    if (!vardas || !email) {
      return res.status(400).json({ error: 'Privalomi laukai: vardas ir email' });
    }

    const result = await formCollection.insertOne({
      vardas,
      email,
      message,
      createdAt: new Date()
    });
    return res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error('❌ Įrašymo klaida:', err);
    return res.status(500).json({ error: 'Serverio klaida' });
  }
});

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

// 5) Start Mongo + Express
async function start() {
  try {
    await client.connect();
    console.log('✔️ Prijungta prie MongoDB');

    // Pasirenkam DB ir kolekciją
    const db = client.db();  // pagal URI: 'Svetaine'
    formCollection = db.collection('Forma');

    app.listen(port, () => {
      console.log(`🚀 Serveris veikia http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ DB jungtis nepavyko:', err);
    process.exit(1);
  }
}
start();
