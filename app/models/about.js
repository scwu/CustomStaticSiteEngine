
/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

/**
 * User schema
 */

var AboutSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  about: { type: String, default: '' },
  address: { type: String, default: '' },
  facebook: { type: String, default: '' },
  twitter: { type: String, default: '' },
  blog: { type: String, default: '' },
  linkedin: { type: String, default: '' }
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

AboutSchema.method({

})

/**
 * Statics
 */

AboutSchema.static({

})

/**
 * Register
 */

var about = mongoose.model('About', AboutSchema)

module.exports = {
  About : about
}
