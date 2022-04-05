odoo.define('practice_v14_2.color_pick', function (require) {

    const AbstractField = require('web.AbstractField');
    const registry = require('web.field_registry');

    const ColorPickerNewField = AbstractField.extend({
        template: 'ColorpickerNewField',
        jsLibs: [
            '/bista_training/static/lib/colorjoe/js/scale.fix.js',
            '/bista_training/static/lib/colorjoe/dist/colorjoe.js'

        ],
        cssLibs: [
            '/bista_training/static/lib/colorjoe/css/pygment_trac.css',
            // '/bista_training/static/lib/colorjoe/css/styles.css',
            '/bista_training/static/lib/colorjoe/css/iehacks.css',
            '/bista_training/static/lib/colorjoe/css/colorjoe.css'
        ],


        start: function () {
            const var1 =colorjoe.rgb(this.$('.colorpicker')[0]);
            // var1.on("change", color => console.log("Selecting " + color.css()));
            var1.on("change", color => this.$('.onchangeval').text(color.css()));
            var1.on("done", color => this._setValue('' + color.css()));


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
    registry.add('color_picker_field', ColorPickerNewField);

    return ColorPickerNewField;


});