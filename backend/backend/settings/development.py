# -*- coding: utf-8 -*-
import os
from .base import *

DEBUG = True
#print(get_env_variable('DB_DATABASE'))
#print(get_env_variable('DB_USER'))
#print(get_env_variable('DB_PASSWORD'))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': get_env_variable('DB_DATABASE'),
        'USER': get_env_variable('DB_USER'),
        'PASSWORD': get_env_variable('DB_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

ALLOWED_HOSTS = []

SECRET_KEY = os.environ['SECRET_KEY']

CORS_ORIGIN_WHITELIST = [
    'http://127.0.0.1:3000'
]
