'use strict';

var dataset1 = function () {

    var dataset1 = {};
    var accounts = new DataTable(['login', 'pass']); //
    accounts.add(["karuna_user", "admin123"]); // adding records to a table
    dataset1.accounts = accounts;
    return dataset1;
};
module.exports = dataset1;