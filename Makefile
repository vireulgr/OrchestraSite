SHELL := /bin/bash

start:
	( \
		cd frontend && npm run start & \
		python3 -m venv venv; \
		source venv/bin/activate; \
		pip install -r requirements.txt; \
		python ./src/backend/manage.py runserver 8080; \
	)
