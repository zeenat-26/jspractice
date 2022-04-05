odoo.define('practice_v14_2.new_color_picker_field.js', function (require){

    const AbstractField = require('web.AbstractField');
    const registry = require('web.field_registry');

    const ColorPickerField = AbstractField.extend({
        template : 'ColorpickerField',
//          jsLibs: [
//          '/practice_v14_2/static/lib/colorpicker/jquery.min.js',
//          '/practice_v14_2/static/lib/colorpicker/pickr.min.js',
//
//    ],
//    cssLibs: [
//        '/practice_v14_2/static/lib/colorpicker/classic.min.css',
//        '/practice_v14_2/static/lib/colorpicker/monolith.min.css',
//        '/practice_v14_2/static/lib/colorpicker/nano.min.css'
//    ],



        start: function () {

//          const pickr = Pickr.create({
//          el: this.$('.color_input'),
//          theme: "monolith",
//          components: {
//            preview: true,
//            opacity: true,
//            hue: true,
//            // Input / output Options
//            interaction: {
//              hex: true,
//              rgba: true,
//              hsla: true,
//              hsva: true,
//              cmyk: true,
//              input: true,
//              clear: true,
//              save: true
//            }
//          }
//        });







            return this._super(this, arguments);
        },
//        _renderReadonly: function () {
//                this.$el.text(this.value)
//                this.$el.removeClass('o_field_empty')
//        },
//        isEmpty: function () {
//        return false;
//        }



    });
    registry.add('color-picker-field', ColorPickerField);

    return ColorPickerField;


});