module.exports = {
  get: (req, res) => {
    res.render("indexView", { title: "Index"});
  },
};
