import Product from "../models/Product.js";


export async function addProduct(req, res) {
  let products = await Product.find({});
  let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  await product.save();
  res.json({ success: true, name: req.body.name });
}

export async function removeProduct(req, res) {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
}

export async function getAllProducts(req, res) {
  let products = await Product.find({});
  res.send(products);
}

export async function newCollection(req, res) {
  let products = await Product.find({});
  res.send(products.slice(1).slice(-8));
}

export async function popularInThreePiches(req, res) {
  let products = await Product.find({ category: "threePiches" });
  res.send(products.slice(0, 4));
}
