'use strict'

var isRelative = require('is-relative')
var isAbsolute = require('is-absolute')
var isURL = require('is-url')

module.exports = function isPath (url) {
  return isAbsolute(url) || (isRelative(url) && !isURL(url))
}
