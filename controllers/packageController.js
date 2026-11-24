const mongoose = require("mongoose");
const Package = require("../models/Package");

// CREATE: Menambahkan paket baru
const createPackage = async (req, res) => {
    try {
        const newPackage = await Package.create(req.body);

        res.status(201).json({
            message: "Paket berhasil ditambahkan!",
            data: newPackage
        });

    } catch (error) {
        res.status(400).json({
            message: "Gagal menambahkan paket.",
            error: error.message
        });
    }
};

 // READ: Menampilkan seluruh paket
const getAllPackages = async (req, res) => {
    try {
        const filter = {};

        // Filter berdasarkan status jika diberikan
        if (req.query.status) {
            filter.status = req.query.status;
        }

        const packages = await Package.find(filter);

        res.status(200).json({
            message: "Data paket berhasil ditampilkan!",
            total: packages.length,
            data: packages
        });

    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data paket.",
            error: error.message
        });
    }
};




// READ: Menampilkan detail paket berdasarkan ID
const getPackageById = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Format ID paket tidak valid."
            });
        }

        const packageData = await Package.findById(id);

        if (!packageData) {
            return res.status(404).json({
                message: "Paket tidak ditemukan."
            });
        }

        res.status(200).json({
            message: "Detail paket berhasil ditampilkan!",
            data: packageData
        });

    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil detail paket.",
            error: error.message
        });
    }
};

// UPDATE: Memperbarui data paket berdasarkan ID
const updatePackage = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Format ID paket tidak valid."
            });
        }

        const updatedPackage = await Package.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedPackage) {
            return res.status(404).json({
                message: "Paket tidak ditemukan."
            });
        }

        res.status(200).json({
            message: "Data paket berhasil diperbarui!",
            data: updatedPackage
        });

    } catch (error) {
        res.status(400).json({
            message: "Gagal memperbarui data paket.",
            error: error.message
        });
    }
};

 // DELETE: Menghapus paket berdasarkan ID
const deletePackage = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Format ID paket tidak valid."
            });
        }

        const deletedPackage = await Package.findByIdAndDelete(id);

        if (!deletedPackage) {
            return res.status(404).json({
                message: "Paket tidak ditemukan."
            });
        }

        res.status(200).json({
            message: "Paket berhasil dihapus!",
            data: deletedPackage
        });

    } catch (error) {
        res.status(500).json({
            message: "Gagal menghapus paket.",
            error: error.message
        });
    }
};

module.exports = {
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage
};