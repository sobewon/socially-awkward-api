//import all of the API routes to prefix their endpoint names and package them up
const router = require("express").Router();
const thought = require("./thoughtRoute");
const user = require("./userRoute");

//add prefix of '/users to routes created in users-routes.js
router.use("/users", user);
//add prefix of '/thoughts to routes created in thoughts-routes.js
router.use("/thoughts", thought);

module.exports = router;