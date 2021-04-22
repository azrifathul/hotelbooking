const router = require("express").Router();
const hotelControllers = require("../controllers/hotels");
const {
  getDataHandler,
  addDataHandler,
  addPostHandler,
  editDataHandler,
  editPostHandler,
  deleteDataHandler,
  loginHandler,
  postLoginHandler,
  logoutHandler,
} = hotelControllers;

router.get("/hotels", getDataHandler);
router.get("/hotels/add", addDataHandler);
router.post("/hotels/add", addPostHandler);
router.get("/hotels/edit/:id", editDataHandler);
router.post("/hotels/edit/:id", editPostHandler);
router.get("/hotels/delete/:id", deleteDataHandler);
router.get("/login", loginHandler);
router.post("/login", postLoginHandler);
router.get("/logout", logoutHandler);

module.exports = router;
