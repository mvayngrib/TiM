var crypto = require('crypto')
var DHT = require('bittorrent-dht')
var leveldown = require('asyncstorage-down')
var open = leveldown.open
leveldown.open = function () {
  console.log(arguments)
  return open.apply(this, arguments)
}

var utils = require('tradle-utils')
var fs = require('fs')
var level = require('react-native-level')
var Driver = require('tim')
var Identity = require('midentity').Identity
// var tedPriv = require('chained-chat/test/fixtures/ted-priv')
// var Fakechain = require('blockloader/fakechain')
var Blockchain = require('cb-blockr')
var Keeper = require('bitkeeper-js')
var Wallet = require('simple-wallet')
// var fakeKeeper = help.fakeKeeper
// var fakeWallet = help.fakeWallet
// var ted = Identity.fromJSON(tedPriv)
var billPriv = require('tim/test/fixtures/bill-priv.json')
var billPub = require('tim/test/fixtures/bill-pub.json')
var tedPriv = require('tim/test/fixtures/ted-priv.json')
var tedPub = require('tim/test/fixtures/ted-pub.json')
var networkName = 'testnet'
var BILL_PORT = 51086
var TED_PORT = 51087
// var keeper = fakeKeeper.empty()

// var tedPub = new Buffer(stringify(require('./fixtures/ted-pub.json')), 'binary')
// var tedPriv = require('./fixtures/ted-priv')
// var ted = Identity.fromJSON(tedPriv)
// var tedPort = 51087
// var tedWallet = realWalletFor(ted)
// var blockchain = tedWallet.blockchain
// var tedWallet = walletFor(ted)

clear(init)

function clear (cb) {
  fs.readdir('storage', function (err, files) {
    console.log(files)
  })

  // var a = level('bill-addressBook.db', { db: leveldown })
  // a.createReadStream()
  //   .on('data', console.log)
  //   .on('end', console.log.bind(console, 'done'))

  // cb()
  // fs.emptyDir('./')
}

function init () {
  setInterval(printIdentityStatus, 30000)
  var driverBill = buildDriver(Identity.fromJSON(billPub), billPriv, BILL_PORT)
  var driverTed = buildDriver(Identity.fromJSON(tedPub), tedPriv, TED_PORT)
  driverBill.once('ready', function () {
    console.log('bill is ready')
    driverBill.on('chained', function (obj) {
      console.log('chained', obj)
    })

    // driverBill.publishMyIdentity()
    driverBill.on('error', function (err) {
      console.error(err)
    })

    driverBill.on('message', function (msg) {
      console.log(msg)
    })
  })

  driverTed.on('ready', function () {
    var billCoords = {
      fingerprint: billPub.pubkeys[0].fingerprint
    }

    driverTed.send({
      msg: {
        hey: 'ho'
      },
      to: [billCoords],
      deliver: true
    })
  })
}

function printIdentityStatus () {
  ;[driverBill, driverTed].forEach(function (d) {
    d.identityPublishStatus(function (err, status) {
      console.log(d.name, 'identity publish status', status)
    })
  })
}

function buildDriver (identity, keys, port) {
  var iJSON = identity.toJSON()
  var dht = dhtFor(iJSON)
  dht.listen(port)

  var keeper = new Keeper({
    dht: dht
  })

  var blockchain = new Blockchain(networkName)

  var d = new Driver({
    pathPrefix: iJSON.name.firstName.toLowerCase(),
    networkName: networkName,
    keeper: keeper,
    blockchain: blockchain,
    leveldown: leveldown,
    identity: identity,
    identityKeys: keys,
    dht: dht,
    port: port,
    syncInterval: 60000
  })

  var log = d.log
  d.log = function () {
    console.log('log', arguments)
    return log.apply(this, arguments)
  }

  return d
}

function dhtFor (identity) {
  return new DHT({
    nodeId: nodeIdFor(identity),
    bootstrap: ['tradle.io:25778']
  })
}

function nodeIdFor (identity) {
  return crypto.createHash('sha256')
    .update(findKey(identity.pubkeys, { type: 'dsa' }).fingerprint)
    .digest()
    .slice(0, 20)
}

function findKey (keys, where) {
  var match
  keys.some(function (k) {
    for (var p in where) {
      if (k[p] !== where[p]) return false
    }

    match = k
    return true
  })

  return match
}
