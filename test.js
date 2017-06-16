'use strict'

const isPath = require('./')
const assert = require('assert')

assert.ok(isPath('C:\\xxx'))
assert.ok(isPath('./something'))
assert.ok(isPath('../something'))
assert.ok(!isPath('https://github.com/xyz'))
