odoo.define('practice_v14_2.customer_sign_portal_extend', function (require) {'use strict';

    var core = require('web.core');
    var config = require('web.config');
    var utils = require('web.utils');
    var customer_portal = require('web.name_and_signature').NameAndSignature;
    var qweb = core.qweb;

    var _t = core._t;
    console.log("----NameAndSignature---->")

    customer_portal.include({

     xmlDependencies: (customer_portal.prototype.xmlDependencies || []).concat(
            ['/practice_v14_2/static/src/xml/customer_portal_field.xml']
        ),

//        events: {
//        // name
//        'input .o_web_customer_name_input_': '_onInputCustomerName'
//        },




    });
});