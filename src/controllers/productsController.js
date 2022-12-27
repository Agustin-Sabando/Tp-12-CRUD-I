const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		
		res.render('products', {
			products,
			toThousand
		})
	},
	detail: (req, res) => {
		const id = +req.params.id;

		let product = products.find(product => product.id === id)

		return res.render('detail', {
			product,
			toThousand
		})
	},
	create: (req, res) => {
		return res.render('product-create-form')
	},
	store: (req, res) => {
		return res.send(req.body)
	},
	edit: (req, res) => {
		const id = +req.params.id;

		let product = products.find(product => product.id === id)

		return res.render('product-edit-form', {
			productToEdit: product,
			toThousand
		})
	},
	update: (req, res) => {
		return res.send("Producto a actualizar")
	},
	destroy : (req, res) => {
		return res.send("Producto a eliminar")
	}
};

module.exports = controller;