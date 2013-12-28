
/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/**
 * Project schema
 */

var ProjectSchema = new Schema({
  name: { type: String, default: '' },
  url: { type: String, default: '' },
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, default: Date.now },
  description: { type: String, default: '' },
})

/**
 * User plugin
 */

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

ProjectSchema.method({

})

/**
 * Statics
 */

ProjectSchema.static({

})

/**
 * Register
 */

var project = mongoose.model('Project', ProjectSchema);

module.exports = {
  Project : project
}
