# -*- coding: utf-8 -*-
import os
from .base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'orchestrasite',
        'USER': 'alex',
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

ALLOWED_HOSTS = []

SECRET_KEY = os.environ['SECRET_KEY']
