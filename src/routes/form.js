const express = require('express');
const router = express.Router();
const Form   = require('../models/Form');

// POST /api/form
router.post('/', async (req, res) => {
  try {
    const { vardas, email, message } = req.body;
    if (!vardas || !email) {
      return res.status(400).json({ error: 'Privalomi laukai: vardas ir email' });
    }
    const doc = await Form.create({ vardas, email, message });
    res.status(201).json({ insertedId: doc._id });
  } catch (err) {
    console.error('❌ Įrašymo klaida:', err);
    res.status(500).json({ error: 'Serverio klaida' });
  }
});

// GET /api/form
router.get('/', async (req, res) => {
  try {
    const docs = await Form.find({}).sort({ createdAt: -1 });
    res.status(200).json(docs);
  } catch (err) {
    console.error('❌ Skaitymo klaida:', err);
    res.status(500).json({ error: 'Serverio klaida' });
  }
});

// GET /api/form/:id
router.get('/:id', async (req, res) => {
  try {
    const doc = await Form.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Įrašas nerastas' });
    res.status(200).json(doc);
  } catch (err) {
    console.error('❌ Skaitymo klaida:', err);
    res.status(500).json({ error: 'Serverio klaida' });
  }
});

// PUT /api/form/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { vardas, email, message } = req.body;
    if (!vardas || !email) {
      return res.status(400).json({ error: 'Privalomi laukai: vardas ir email' });
    }
    const doc = await Form.findByIdAndUpdate(id, { vardas, email, message }, { new: true });
    if (!doc) return res.status(404).json({ error: 'Įrašas nerastas' });
    res.status(200).json(doc);
  } catch (err) {
    console.error('❌ Atnaudinimo klaida:', err);
    res.status(500).json({ error: 'Serverio klaida' });
  }
});

// DELETE /api/form/:id
router.delete('/:id', async (req, res) => {
  try {
    const doc = await Form.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Įrašas nerastas' });
    res.status(200).json({ message: 'Įrašas ištrintas' });
  } catch (err) {
    console.error('❌ Ištrynimo klaida:', err);
    res.status(500).json({ error: 'Serverio klaida' });
  }
});

module.exports = router;