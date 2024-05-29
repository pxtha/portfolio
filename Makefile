BUILD_VERSION=$(shell cat VERSION)
DOCKER_IMAGE=porfolio:latest

push: build
	docker push registry.digitalocean.com/pxtha/$(DOCKER_IMAGE)

build:
	docker build -t registry.digitalocean.com/pxtha/$(DOCKER_IMAGE) .

pull:
	BUILD_VERSION=$(BUILD_VERSION) docker compose pull 

run: pull
	BUILD_VERSION=$(BUILD_VERSION) docker compose up -d --build --force-recreate
