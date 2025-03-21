const express = require("express");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const { body, query } = require("express-validator");

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid Pickup Address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid Destination Address"),
  body("vehicleType")
    .isString()
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid Vehicle Type"),
  rideController.createRide
);

router.get(
  "/get-fare",
  authMiddleware.authUser,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid Pickup Address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid Destination Address"),
  rideController.getFare
);

router.post('/confirm'
,authMiddleware.authCaptain,
body("rideId").isMongoId().withMessage("Invalid Ride Id"),
rideController.confirmRide)

module.exports = router;
