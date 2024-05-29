DOCKER_IMAGE=porfolio

push: build
	docker push registry.digitalocean.com/pxtha/$(DOCKER_IMAGE)

build:
	docker build -t registry.digitalocean.com/pxtha/$(DOCKER_IMAGE) .

pull:
	docker compose pull

run: pull

	docker compose up -d
