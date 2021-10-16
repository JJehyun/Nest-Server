"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(express.json());
        this.setRoute();
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(3000, function () {
            _this.setMiddleware();
            console.log("server is on http://localhost:3000...");
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map