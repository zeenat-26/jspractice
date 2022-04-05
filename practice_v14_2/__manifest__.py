# Copyright (C) 2010-2012 Camptocamp Austria (<http://www.camptocamp.at>)
# Copyright (C) 2018 - TODAY, Open Source Integrators
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Practice Tasks 2",
    "version": "14.0.1.1.5",
    "category": "Accounting & Finance",
    "depends": ['web', 'website','sale','account', 'point_of_sale'],
    "author": "Open Source Integrators, Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/account-payment",
    "data": [
        "security/ir.model.access.csv",
        "views/school_view.xml",
        "views/assets.xml",
        'views/account_move_view.xml'

    ],
    'qweb': [
        'static/src/xml/base.xml',

    ],
    "installable": True,
    'application': True,
}
