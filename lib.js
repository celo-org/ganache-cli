// make sourcemaps work!
require('source-map-support').install();

module.exports = require("@shardlabs/ganache-core/public-exports.js");
module.exports.version = require("@shardlabs/ganache-core/package.json").version;
module.exports.to = require("@shardlabs/ganache-core/lib/utils/to");
