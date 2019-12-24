# -*- coding: utf-8 -*-
from .base import *

DEBUG = False
ALLOWED_HOSTS = ['orchestra-fork.herokuapp.com']

SESSION_COOKIE_SECURE = True

DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)
