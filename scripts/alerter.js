"use strict";
var ds = require('./dataservice.js');
var dataService = new ds.DataService();
var Alerter = (function () {
    function Alerter() {
        this.name = 'John Smith';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataService.getMessage();
        alert(msg + ' ' + this.name);
    };
    return Alerter;
}());
exports.Alerter = Alerter;
//# sourceMappingURL=alerter.js.map