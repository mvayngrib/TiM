#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var hostname = (process.argv[2] || 'rnhost').replace(/^\"(.*)\"$/, '$1')

updateLocalIP()
fixIP()

function fixIP () {
  ;[
    // path.resolve('./node_modules/react-native/Libraries/WebSocket/RCTWebSocketExecutor.m'),
    path.resolve('./iOS/Tradle/AppDelegate.m')
  ].forEach(function (file) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, contents) {
      if (err) {
        if (err.code === 'ENOENT') {
          return console.log('file not found:', file)
        } else {
          throw err
        }
      }

      var hacked = contents.replace(
        /((?:URLWithString|stringWithFormat)\:\@\"http\:\/\/)[^:]+/g,
        '$1' + hostname
      )

      if (hacked !== contents) {
        fs.writeFile(file, hacked, function (err) {
          if (err) throw err
        })
      }
    })
  })
}

function updateLocalIP () {
  var localIP = path.resolve('utils/localIP.json')
  fs.readFile(localIP, { encoding: 'utf8' }, function (err, contents) {
    if (err) throw err
    if (hostname === 'localhost')
      hostname = '127.0.0.1'

    const json = JSON.stringify(hostname)
    if (json !== contents) {
      fs.writeFile(localIP, json, function (err) {
        if (err) throw err
      })
    }
  })
}
