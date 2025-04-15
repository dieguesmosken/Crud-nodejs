import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// Listar
router.get('/show',(req, res) => {
  // res.render('index');
  console.log(req.body)
});

// rota inicial
router.get('/',(req, res) => {
  res.render('index');
});

// Form novo
router.get('/new', (req, res) => {
  res.render('new');
});

// Criar
router.post('/create', async (req, res) => {
  const { nome, descricao } = req.body;
  await Item.create({ nome, descricao });
  res.redirect('/');
});

// Form editar
router.get('/edit/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('edit', { item });
});

// Atualizar
router.post('/update/:id', async (req, res) => {
  const { nome, descricao } = req.body;
  await Item.findByIdAndUpdate(req.params.id, { nome, descricao });
  res.redirect('/');
});

// Deletar
router.post('/delete/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

export default router;
