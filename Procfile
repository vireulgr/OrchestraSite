web: gunicorn --chdir backend backend.wsgi:application --log-file -

release: python backend/manage.py migrate