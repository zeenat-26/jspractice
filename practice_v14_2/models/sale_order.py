from dateutil.relativedelta import relativedelta

from odoo import api, fields, models


class SaleOrder(models.Model):
    _inherit = "sale.order"

    @api.onchange('order_line')
    def product_id_onchange(self):
        for rec in self.order_line:
            for i in rec.product_id.seller_ids:
                # rec.price_unit = rec.product_id.price
                print('zee////////////', rec.product_id.price,i.price)
