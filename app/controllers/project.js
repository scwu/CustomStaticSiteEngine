
/*!
 * Module dependencies.
 */

var Project = require('../models/projects').Project;

// list projects
exports.index = function (req, res) {
  Project.find({}, function (err,projs) {
    if (err) {
      res.send(404);
    } else {
      res.send({
        projects: JSON.stringify(projs)
      });
    }
  })
}

exports.new = function (req,res){
  res.render('projects', {
    title: 'New Project',
  })
}

//post request
exports.create = function (req,res) {
  Project.create({ 
    name: req.body.name,
    url: req.body.url,
    start_date: req.body.start,
    end_date: req.body.end,
    description: req.body.description
  }, function (err, small) {
    if (err) return handleError(err);
    res.send(200);
    // saved!
  }) 
}

//show post
exports.show = function(req, res) {
  Project.findById(req.params.id, function(err, proj) {
    if (err) return handleError(err);
    res.send({project: JSON.stringify(proj)});
  })
}

exports.edit = function(req, res) {
  Project.findById(req.params.id, function(err, proj) {
    if (err) return handleError(err);
    res.send({project: JSON.stringify(proj)});
  })
}

exports.update = function(req, res) {
  Project.findByIdAndUpdate(req.params.id, { 
    name: req.body.name,
    url: req.body.url,
    start_date: req.body.start,
    end_date: req.body.end,
    description: req.body.description
    }, function(err, proj) {
      if (err) return handleError(err);
      res.send(200);
  })
}

exports.delete = function(req, res) {
  Project.findByIdAndDelete(req.params.id, function(err, proj) {
    if (err) return handleError(err);
    res.send(200);
  })
}

