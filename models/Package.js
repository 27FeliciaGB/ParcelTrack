
const mongoose = require("mongoose");

// Menentukan struktur data paket
const packageSchema = new mongoose.Schema({
    nomorResi: {
        type: String,
        required: true,
        unique: true
    },
    namaPengirim: {
        type: String,
        required: true
    },
    namaPenerima: {
        type: String,
        required: true
    },
    alamatAsal: {
        type: String,
        required: true
    },
    alamatTujuan: {
        type: String,
        required: true
    },
    kurir: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            "Menunggu Pickup",
            "Diproses",
            "Dalam Pengiriman",
            "Dalam Transit",
            "Diterima"
        ],
        default: "Menunggu Pickup"
    }
}, {
    timestamps: true
});

// Membuat model Package
const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
