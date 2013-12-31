
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  res.render('home', {
    title: 'Node Express Mongoose Boilerplate'
  })
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
