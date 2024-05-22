BUILD_VERSION=$(shell cat VERSION)
DOCKER_IMAGE=porfolio:$(BUILD_VERSION)

push: build
	docker push registry.digitalocean.com/pxtha/$(DOCKER_IMAGE)

build:
	docker build -t registry.digitalocean.com/pxtha/$(DOCKER_IMAGE) .

run:
	BUILD_VERSION=$(BUILD_VERSION) docker compose up -d --build

