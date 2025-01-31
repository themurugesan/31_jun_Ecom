const express=require("express");

const userController=require("../controllers/user")

const CartDetails = require("./cart");
const { CartGet } = require("../controllers/cartdisplay");
const { CartPut } = require("../controllers/cartremove");
const { authenticateToken } = require("../utils/authMiddeleware");
const { NotifyGet } = require("../controllers/NotifyGet");
const DashboardGet = require("../controllers/DashboardGet");
const { NotifyRemove } = require("../controllers/Notifyremove");

const router=express.Router();

router.route("/cart").post(authenticateToken,CartDetails);
router.get("/users",authenticateToken,userController.getUsers);
router.route("/cartget").get(authenticateToken,CartGet)
router.route("/cartput").post(authenticateToken,CartPut)
router.route("/notifyremove").post(authenticateToken,NotifyRemove)
router.route("/notify").get(authenticateToken,NotifyGet)
router.route("/images").get(authenticateToken,DashboardGet)

// router.route("/image").get(authenticateToken,AdminGEt)

module.exports=router;