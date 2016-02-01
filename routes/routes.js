"use strict";
var os = require("os");
/*
 * GET home page.
 */
exports.index = function(req, res){
    res.render('index', { title: 'Request Header Parser Microservice' });
};
/*
 * GET time request and return JSON object
 */
exports.whoami = function(req, res){
    var userData = req.headers;
    var language = userData["accept-language"].slice(0, 5);
    // If all well, writehead 200 with mimetype JSON
    res.writeHead(200, {"Content-Type" : "application/json"});
    var json = {"ip": userData["x-forwarded-for"], "language": language, "operating system": os.type()};
    var data = JSON.stringify(json);
    res.end(data);
};