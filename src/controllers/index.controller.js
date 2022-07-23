const { read, write } = require("../utils/FS.readWrite");

module.exports = {
  GET: (_, res) => {
    res.render("index.view.ejs");
  },

  POST: (req, res) => {
    const { name, email, message } = req.body;
    const data = read("app.model.json");

    data.push({
      id: data[data.length - 1]?.id + 1 || 1,
      name,
      email,
      message,
    });

    write("app.model.json", data);

    res.redirect("/");
  },

  APP: (req, res) => {
    res.send(read("app.model.json"));
  },
};
