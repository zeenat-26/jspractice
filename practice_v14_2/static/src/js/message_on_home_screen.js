odoo.define('practice_v14_2.message_on_home_screen', function (require) {

var Widget = require('web.Widget');
var registry = require('web.field_registry');
var AbstractField = require('web.AbstractField');



var Counter = AbstractField.extend({
    template: 'IntegerSlider_temp',
    events: {
        'click button': '_onClick',
    },
    init: function () {
        this._super(...arguments);
        this.count = 1;

    },
    _onClick: function () {
        this.count++;
        this.$('.val').text(this.count);
    },
    _renderReadonly: function () {
                this.$el.text(this.count)
                this.$el.removeClass('o_field_empty')

        },
        isEmpty: function () {
        return false;
        }
});
 registry.add('counter', Counter);

    return Counter;


});
