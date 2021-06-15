odoo.define('web_binaryfieldsize_sgs.basic_fields', function (require) {
"use strict";

var FieldBinaryFile = require('web.basic_fields').FieldBinaryFile;

var FieldBinaryFile = FieldBinaryFile.include({
    init: function () {
        this._super.apply(this, arguments);
        this.max_upload_size = 100 * 1024 * 1024; // 25Mo
    },

});
});
