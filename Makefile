SHELL := pwsh.exe -NoLogo -Command

build:
	# Build static index with inline data via Dockerized Python
	docker compose run --rm python python build_static.py
