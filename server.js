
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");
const packageRoutes = require("./routes/packageRoutes");

const app = express();

// Middleware untuk membaca JSON
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
    res.status(200).json({
        message: "ParcelTrack API berhasil dijalankan!"
    });
});

// Routes pengelolaan paket
app.use("/api/packages", packageRoutes);

// Port server
const PORT = process.env.PORT || 3000;

// Menjalankan koneksi database dan server
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
    });
};

startServer();
