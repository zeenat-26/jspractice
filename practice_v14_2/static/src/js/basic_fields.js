
odoo.define('bista_js_session.pos_test', function (require) {

    const Orderline = require('point_of_sale.Orderline');
    const { patch } = require('web.utils');

    patch(Orderline, 'bista_js_session.Orderline', {
        onRemoveLine() {
            this.trigger('remove-line', { orderline: this.props.line });
        }
    });
});


odoo.define('bista_js_session.OrderWidget', function(require) {
    'use strict';

    const OrderWidget = require('point_of_sale.OrderWidget');
    const { useListener } = require('web.custom_hooks');
    const { patch } = require('web.utils');

    patch(OrderWidget, 'bista_js_session.Orderline', {
        setup() {
            useListener('remove-line', this._removeLine);
        },

        _removeLine(event) {
            this.order.remove_orderline(event.detail.orderline);
        }
    });
});

odoo.define('practice_v14_2.basic_fields.js', function (require){

    const AbstractField = require('web.AbstractField');
    const registry = require('web.field_registry');

    const IntegerFieldSlider = AbstractField.extend({
        template : 'IntegerSlider',
          jsLibs: [
        '/practice_v14_2/static/lib/jquery-ui-1.13.1/jquery-ui.js',
    ],
    cssLibs: [
        '/practice_v14_2/static/lib/jquery-ui-1.13.1/jquery-ui.css',
    ],
        init: function (){
            this._super(...arguments);
            this.minVal= this.attrs.options.min;
            this.maxVal= this.attrs.options.max;
        },
        start: function () {
            if (this.mode == 'edit'){
                let options = {
                    value: this.value,
                    change: (event, ui) => this._setValue('' + ui.value),
                }
                if (this.minVal || this.minVal === 0 ) {
                    Object.assign(options, {
                        min: this.minVal
                    });
                }
                if (this.maxVal) {
                    Object.assign(options, {
                        max: this.maxVal
                    });
                }
                this.$el.slider(options);
            }
            return this._super(this, arguments);
        },
            _renderReadonly: function () {
                this.$el.text(this.value)
                this.$el.removeClass('o_field_empty')
        },
        isEmpty: function () {
        return false;
        }
    });
    registry.add('integer_field_slider', IntegerFieldSlider);

    return IntegerFieldSlider;


});

odoo.define('practice_v14_2.color_fields.js', function (require){

    const BasicFields = require('web.basic_fields');
    const registry = require('web.field_registry');

    const MiniColorField = BasicFields.FieldChar.extend({
        template : 'MiniColorField',
          jsLibs: [
        '/practice_v14_2/static/lib/spectrum-colorpicker2/dist/spectrum.min.js',
    ],
    cssLibs: [
        '/practice_v14_2/static/lib/spectrum-colorpicker2/dist/spectrum.min.css',
    ],
//        init: function (){
//            this._super(...arguments);
//            this.minVal= this.attrs.options.min;
//            this.maxVal= this.attrs.options.max;
//        },
        start: function () {
//            if (this.mode == 'edit'){
//                let options = {
//                    value: this.value,
//                    change: (event, ui) => this._setValue('' + ui.value),
//                }
//                if (this.minVal || this.minVal === 0 ) {
//                    Object.assign(options, {
//                        min: this.minVal
//                    });
//                }
//                if (this.maxVal) {
//                    Object.assign(options, {
//                        max: this.maxVal
//                    });
//                }
//                this.$('.o_mini_color_field').spectrum();

            return this._super(this, arguments);
        },

        _renderEdit: function () {
                        this.$('.o_mini_color_field').spectrum();


//                var show_value = this.value ;
//                var $input = this.$el.find('input');
//                $input.val(show_value);
//
//                this.$el.colorpicker({format: 'rgba'});
//                this.$input = $input;

        },

//            _renderReadonly: function () {
//                this.$el.text(this.value)
//                this.$el.removeClass('o_field_empty')
//        },
//        isEmpty: function () {
//        return false;
//        }
    });
    registry.add('mini-color-field', MiniColorField);

    return MiniColorField;


});