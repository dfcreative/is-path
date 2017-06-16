'use strict'

const isPath = require('./')
const assert = require('assert')
const isWindows = require('is-windows')()

assert.ok(isWindows ? isPath('C:\\xxx') : !isPath('C:\\xxx'))
assert.ok(isPath('./something'))
assert.ok(isPath('../something'))
assert.ok(!isPath('https://github.com/xyz'))
