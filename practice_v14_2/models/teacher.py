from odoo import api, fields, models


class TeacherModel(models.Model):
    _name = "teacher.models"

    name = fields.Char(string='Name', Required=1)
    subject = fields.Char(string='Name', Required=1)
    age = fields.Integer(string='Name', Required=1)
