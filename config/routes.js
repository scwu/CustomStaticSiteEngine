
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
var passportOptions = {
  failureFlash: 'Invalid email or password.',
  failureRedirect: '/login'
}

// controllers
var home = require('home')
var projects = require('project')
var about = require('about')

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index)
  app.get('/partials/:name', home.partials);
  app.get('/projects', projects.index)
  app.get('/projects/new', projects.new)
  app.post('/projects', projects.create)
  app.get('/projects/:id', projects.show)
  app.get('/projects/:id/edit', projects.edit)
  app.put('/posts/:id', projects.update)
  app.get('/api/about', about.index)
  app.put('/api/about', about.create)
  //app.get('/about/new', about.new)
  app.get('/api/about/edit', about.edit)
  app.put('/api/about/edit', about.update)
}
