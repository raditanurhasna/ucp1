const express = require('express');
const app = express();
const port = 3000;

// Array untuk menyimpan data kolam renang
let pools = [
    { id: 1, name: 'Kolam Renang A', location: 'Jakarta', price: 'Rp50.000' },
    { id: 2, name: 'Kolam Renang B', location: 'Bandung', price: 'Rp40.000' }
];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Route untuk menampilkan data kolam renang
app.get('/', (req, res) => {
    res.render('index', { pools });
});

// Route untuk halaman tambah kolam renang
app.get('/add', (req, res) => {
    res.render('add');
});

// Route untuk menambah data kolam renang
app.post('/add', (req, res) => {
    const { name, location, price } = req.body;
    const newPool = {
        id: pools.length + 1, // Auto increment ID
        name,
        location,
        price
    };
    pools.push(newPool);
    res.redirect('/');
});

// Route untuk menghapus data kolam renang
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    pools = pools.filter(pool => pool.id !== parseInt(id));
    res.redirect('/');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
