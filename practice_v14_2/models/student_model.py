
from odoo import api, fields, models


class StudentModel(models.Model):
    _name = "student.models"

    name = fields.Char(string='Name', Required=1)
    role_no = fields.Char(string='Name', Required=1)
    age = fields.Integer(string='Name', Required=1)
