# ParcelTrack API

ParcelTrack API merupakan aplikasi backend berbasis REST API yang digunakan untuk mengelola data paket dan informasi pengiriman. Aplikasi ini memungkinkan pengguna melakukan operasi CRUD (Create, Read, Update, Delete) serta memfilter data paket berdasarkan status pengiriman.

## Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

## Fitur Utama

1. Menambahkan data paket baru.
2. Menampilkan seluruh data paket.
3. Menampilkan detail paket berdasarkan ID.
4. Memperbarui data paket berdasarkan ID.
5. Menghapus data paket berdasarkan ID.
6. Memfilter data paket berdasarkan status pengiriman.

## Struktur Folder

```text
ParcelTrack/
├── config/
│   └── database.js
├── controllers/
│   └── packageController.js
├── models/
│   └── Package.js
├── routes/
│   └── packageRoutes.js
├── server.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Instalasi dan Menjalankan Aplikasi

1. Clone repository:

   ```bash
   git clone https://github.com/27FeliciaGB/ParcelTrack.git
   ```

2. Masuk ke folder proyek:

   ```bash
   cd ParcelTrack
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Buat file `.env` di direktori utama proyek dan isi konfigurasi berikut:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/parceltrack
   PORT=3000
   ```

5. Pastikan MongoDB Server sudah berjalan, kemudian jalankan aplikasi:

   ```bash
   npm run dev
   ```

6. Server berjalan pada alamat:

   ```text
   http://localhost:3000
   ```

## Daftar API Endpoint

Base URL:

```text
http://localhost:3000/api/packages
```

| HTTP Method | Endpoint | Fungsi |
|---|---|---|
| POST | `/` | Menambahkan paket baru |
| GET | `/` | Menampilkan seluruh paket |
| GET | `/:id` | Menampilkan detail paket berdasarkan ID |
| PUT | `/:id` | Memperbarui data paket berdasarkan ID |
| DELETE | `/:id` | Menghapus paket berdasarkan ID |

### Path Parameter

Path Parameter digunakan untuk mengakses data paket berdasarkan ID.

Contoh:

```text
GET /api/packages/ID_PAKET
```

### Query Parameter

Query Parameter digunakan untuk memfilter data paket berdasarkan status pengiriman.

| Parameter | Contoh | Fungsi |
|---|---|---|
| status | `?status=Dalam%20Pengiriman` | Memfilter paket berdasarkan status pengiriman |

Contoh penggunaan:

```text
GET /api/packages?status=Dalam%20Pengiriman
```

## Contoh Data Paket

```json
{
  "nomorResi": "JIO001",
  "namaPengirim": "Felicia",
  "namaPenerima": "Andi",
  "alamatAsal": "Jakarta",
  "alamatTujuan": "Bekasi",
  "kurir": "JNE",
  "status": "Menunggu Pickup"
}
```

## Status Pengiriman

Status paket yang tersedia:

- Menunggu Pickup
- Diproses
- Dalam Pengiriman
- Dalam Transit
- Diterima

## Pengujian API

Seluruh endpoint diuji menggunakan Postman untuk memastikan setiap fitur berjalan sesuai fungsinya.

Pengujian mencakup:

- Create, Read, Update, dan Delete data paket.
- Path Parameter menggunakan ID paket.
- Query Parameter untuk memfilter status paket.
- Pengujian data tidak lengkap dan ID tidak valid.
- Pemeriksaan HTTP response status code, seperti 200, 201, 400, dan 404.

Dokumentasi pengujian API tersedia dalam folder `Dokumentasi_Pengujian`.

## Author

Nama: Felicia Giona Budiman

Project: Final Project Trial Study Club Backend Basic

KSM VeteranTech UPN "Veteran" Jakarta