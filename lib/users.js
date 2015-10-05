/**
 * Users
 * @param schema
 * @constructor
 */

var Promise  = require('bluebird'),
    AWS      = require('aws-sdk'),
    bcryptjs = require('bcryptjs'),
    moment   = require('moment'),
    uuid     = require('node-uuid'),
    debug    = require('debug')('awsm-users');

var dynamodb = new AWS.DynamoDB();
Promise.promisifyAll(Object.getPrototypeOf(dynamodb));

function Users() {}

/**
 * Validate
 */

Users.prototype.validate = Promise.method(function() {


});

/**
 * Secure
 */

Users.prototype.secure = Promise.method(function() {


});

/**
 * Create
 */

Users.prototype.create = Promise.method(function() {


});


