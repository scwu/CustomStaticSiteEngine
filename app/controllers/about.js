
/*!
 * Module dependencies.
 */

var About = require('../models/about').About;

// list all about sections
exports.index = function (req, res) {
  About.find({}, function (err,about) {
    if (err) {
      res.send(404);
    } else {
      res.send({
        about: JSON.stringify(about)
      });
    }
  })
}

exports.new = function (req,res){
  res.render('about', {
    title: 'New About',
  })
}

//post request
exports.create = function (req,res) {
  About.create({ 
    name: req.body.name,
    email: req.body.email,
    about: req.body.about,
    address: req.body.address,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    blog : req.body.blog,
    linkedin: req.body.linkedin
  }, function (err, small) {
    if (err) return handleError(err);
    res.send(200);
    // saved!
  }) 
}

exports.edit = function (req, res) {
  About.find({}, function (err,about) {
    if (err) {
      res.send(404);
    } else {
      res.send({
        about: JSON.stringify(about)
      });
    }
  })
}


exports.update = function(req, res) {
  About.findByIdAndUpdate(req.params.id, { 
    name: req.body.name,
    email: req.body.email,
    about: req.body.about,
    address: req.body.address,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    blog : req.bodoy.blog,
    linkedin: req.body.linkedin
    }, function(err, proj) {
      if (err) return handleError(err);
      res.send(200);
  })
}

