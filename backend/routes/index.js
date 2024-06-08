const express = require("express");
const router = express.Router();

// Diğer Rota Doslayını İçeri Aktarıyoruz.
const productRoute = require("./products.js");
const categoryRouter = require("./categories.js");
const authRouter = require("./auth.js");
const authRoute = require("./auth.js")
const userRoute = require("./users.js");

// Her Rotayı İlgil Yol Altında Kullanıyoruz.

router.use("/categories",categoryRouter);  
router.use("/Users",authRouter);  
router.use("/products", productRoute);
router.use("/auth",authRoute);
router.use("/users",userRoute);


module.exports = router;