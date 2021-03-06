"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updatePartialCat = exports.updateCat = exports.createCat = exports.readAll = void 0;
var app_model_1 = require("./app.model");
var readAll = function (req, res) {
    try {
        var param_1 = req.params;
        var cat = app_model_1.Cat.find(function (array) {
            return array.id === param_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.readAll = readAll;
var createCat = function (req, res) {
    try {
        var data = req.body;
        app_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: {},
            Cat: { data: data },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.createCat = createCat;
var updateCat = function (req, res) {
    try {
        var param_2 = req.params;
        var body_1 = req.body;
        var result_1;
        app_model_1.Cat.forEach(function (cat) {
            if (cat.id === param_2.id) {
                cat = body_1;
                result_1 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                result: result_1,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.updateCat = updateCat;
var updatePartialCat = function (req, res) {
    try {
        var param_3 = req.params;
        var body_2 = req.body;
        var result_2;
        app_model_1.Cat.forEach(function (cat) {
            if (cat.id === param_3.id) {
                cat = __assign(__assign({}, cat), body_2);
                result_2 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                result: result_2,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.updatePartialCat = updatePartialCat;
var deleteCat = function (req, res) {
    try {
        var param_4 = req.params;
        var newCats = app_model_1.Cat.filter(function (cat) { return cat.id !== param_4.id; });
        res.status(200).send({
            success: true,
            data: {
                newCats: newCats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map