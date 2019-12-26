# -*- coding: utf-8 -*-
from .base import *
import dj_database_url
import django_heroku

django_heroku.settings(locals())

SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = True
ALLOWED_HOSTS = ['orchestra-site.herokuapp.com']
print(ALLOWED_HOSTS)
print(SECRET_KEY)

SESSION_COOKIE_SECURE = True

DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)
