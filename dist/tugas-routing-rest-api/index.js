const express = require('express');
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Data kategori
let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' }
];

// Data produk
let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
];

// Route GET untuk mendapatkan semua kategori
app.get('/categories', (req, res) => {
    res.json(categories);
});

// Route GET untuk mendapatkan kategori berdasarkan ID
app.get('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
});

// Route POST untuk menambahkan kategori baru
app.post('/categories', (req, res) => {
    const newCategory = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// Route PUT untuk memperbarui kategori berdasarkan ID
app.put('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
        category.name = req.body.name;
        res.json(category);
    } else {
        res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
});

// Route DELETE untuk menghapus kategori berdasarkan ID
app.delete('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(cat => cat.id !== categoryId);
    res.status(204).send();
});

// Route GET untuk mencari produk berdasarkan nama
app.get('/products/search', (req, res) => {
    const { name } = req.query;
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredProducts);
});

// Route GET untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama
app.get('/categories/:categoryId/products/search', (req, res) => {
    const categoryId = parseInt(req.params.categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
    const { name } = req.query;
    const filteredProducts = products.filter(product => 
        product.category === category.name && product.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredProducts);
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
