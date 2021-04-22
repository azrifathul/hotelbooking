const { Hotel } = require("../models");
const bcrypt = require("bcryptjs");
const session = require("express-session");

class Hotels {
  static getDataHandler(req, res) {
    Hotel.findAll({
      order: [["id", "ASC"]],
    })
      .then((data) => {
        res.render("hotels/main", { data, role: req.session.role });
      })
      .catch((err) => res.send(err));
  }

  static addDataHandler(req, res) {
    res.render("hotels/form", { data: {}, type: "add" });
  }

  static editDataHandler(req, res) {
    Hotel.findByPk(Number(req.params.id))
      .then((data) => res.render("hotels/form", { data, type: "edit" }))
      .catch((err) => res.send(err));
  }

  static addPostHandler(req, res) {
    let obj = {
      name: req.body.name,
      rating: Number(req.body.rating),
      location: req.body.location,
      price: Number(req.body.price),
      image: req.body.image,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    Hotel.create(obj)
      .then(() => res.redirect("/hotels"))
      .catch((err) => res.send(err));
  }

  static editPostHandler(req, res) {
    let obj = {
      name: req.body.name,
      rating: Number(req.body.rating),
      location: req.body.location,
      price: Number(req.body.price),
      image: req.body.image,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    Hotel.update(obj, { where: { id: Number(req.params.id) } })
      .then(() => res.redirect("/hotels"))
      .catch((err) => res.send(err));
  }

  static deleteDataHandler(req, res) {
    Hotel.destroy({
      where: {
        id: Number(req.params.id),
      },
    })
      .then(() => res.redirect("/hotels"))
      .catch((err) => res.send(err));
  }

  static loginHandler(req, res) {
    res.render("hotels/login");
  }

  static postLoginHandler(req, res) {
    let salt = bcrypt.genSaltSync(10);
    let hashResult = bcrypt.hashSync(req.body.password, salt);

    //manual
    if (
      req.body.email === "superadmin@gmail.com" &&
      bcrypt.compareSync("superadmin", hashResult)
    ) {
      req.session.role = "admin";
      res.redirect("/hotels");
    }
    // getComputedStyle.findAll({
    //   where: {
    //     email: req.body.email,
    //     password: req.body.password,
    //   },
    // });
  }

  static logoutHandler(req, res) {
    req.session.destroy();
    res.redirect("/hotels");
  }
}

module.exports = Hotels;
