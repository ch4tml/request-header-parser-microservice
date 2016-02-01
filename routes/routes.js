"use strict";

// var requestObject = url.parse(request.url, true);

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

    // If all well, writehead 200 with mimetype JSON
    res.writeHead(200, {"Content-Type" : "application/json"});

    res.end();
};