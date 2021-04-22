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

const isLoginMiddleware = function (req, res, next) {
  if (req.session.isLogin) {
    next();
  } else {
    res.redirect("/hotels");
  }
};

router.get("/hotels", getDataHandler);

router.get("/login", loginHandler);
router.post("/login", postLoginHandler);
router.get("/logout", logoutHandler);
router.get("/hotels/add", isLoginMiddleware, addDataHandler);
router.post("/hotels/add", addPostHandler);
router.get("/hotels/edit/:id", isLoginMiddleware, editDataHandler);
router.post("/hotels/edit/:id", editPostHandler);
router.get("/hotels/delete/:id", isLoginMiddleware, deleteDataHandler);

module.exports = router;
