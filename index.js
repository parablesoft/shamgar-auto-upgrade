'use strict';

module.exports = {
  name: 'shamgar-auto-upgrade',

  included: function (app) {
    this._super.included(app);

    app.import("node_modules/sweetalert/dist/sweetalert-dev.js");
    app.import("node_modules/sweetalert/dist/sweetalert.css");
  }
};