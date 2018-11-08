'use strict'

const path = require('path')

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.min.js'
    },
   target: 'web'
}