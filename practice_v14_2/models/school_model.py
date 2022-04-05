from odoo import api, fields, models


class SchoolModel(models.Model):
    _name = "school.models"

    age = fields.Integer(string='age', Required=1)
    ages = fields.Integer(string='ages', Required=1)
    address = fields.Char(string='Address', Required=1)
