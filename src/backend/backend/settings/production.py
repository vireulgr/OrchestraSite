# -*- coding: utf-8 -*-
from .base import *
import dj_database_url
import django_heroku

django_heroku.settings(locals())

print(secret_key)

DEBUG = False
ALLOWED_HOSTS = ['orchestra-fork.herokuapp.com']

SESSION_COOKIE_SECURE = True

DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)
