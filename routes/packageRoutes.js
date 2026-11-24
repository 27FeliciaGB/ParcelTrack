
const express = require("express");
const router = express.Router();

const {
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage
} = require("../controllers/packageController");

// CREATE
router.post("/", createPackage);

// READ semua paket
router.get("/", getAllPackages);

// READ detail paket
router.get("/:id", getPackageById);

// UPDATE paket
router.put("/:id", updatePackage);

// DELETE paket
router.delete("/:id", deletePackage);

module.exports = router;
