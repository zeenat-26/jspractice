from dateutil.relativedelta import relativedelta

from odoo import api, fields, models
#
#
# class AccountMove(models.Model):
#     _inherit = "account.move"
#
#     sale_id = fields.Char(string="Sale Order")
#     is_sale_id = fields.Boolean("From Sale Order")
#
#
# class SaleAdvancePaymentInv(models.TransientModel):
#     _inherit = "sale.advance.payment.inv"
#
#     def _prepare_invoice_values(self, order, name, amount, so_line):
#         invoice_vals = super(SaleAdvancePaymentInv, self)._prepare_invoice_values(order, name, amount, so_line)
#         custom_value = {
#             'sale_id': so_line.name,
#             'is_sale_id': True
#
#         }
#         invoice_vals.update(custom_value)
#         return invoice_vals



