web: gunicorn --chdir src/backend backend.wsgi:application --log-file -

release: python src/backend/manage.py migrate