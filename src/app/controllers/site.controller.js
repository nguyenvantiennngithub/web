class siteController {
  // [GET] /
  index(req, res) {
    res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
  // [POST] /find
  find(req, res, next) {
    res.redirect(`https://www.google.com/search?q=${req.body.q}`);
  }
}

module.exports = new siteController();
