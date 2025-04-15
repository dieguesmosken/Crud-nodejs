import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  nome: String,
  descricao: String
});

const Item = mongoose.model('Item', ItemSchema);
export default Item;
