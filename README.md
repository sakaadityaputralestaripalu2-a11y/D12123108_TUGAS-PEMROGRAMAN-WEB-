
# 📚 REST API Toko Buku

REST API sederhana untuk mengelola koleksi buku.

## 🚀 Fitur
- CRUD Buku lengkap
- Express Router terpisah
- Middleware:
  - Logging
  - Validasi input
  - Error handler (4 argumen)
- File statis `/images`
- Data disimpan di `books.json`

## 📁 Struktur Folder
```
book-api/
 ├── server.js
 ├── routes/
 ├── controllers/
 ├── middleware/
 ├── data/
 └── images/
```

## 🔧 Cara Menjalankan
```
npm install
npm start
```

## 🔗 Endpoint
| Method | Route | Deskripsi |
|--------|--------|-----------|
| GET | /books | Ambil semua buku |
| GET | /books/:id | Ambil satu buku |
| POST | /books | Tambah buku |
| PUT | /books/:id | Update buku |
| DELETE | /books/:id | Hapus buku |

## 📌 Contoh Body POST
```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```
