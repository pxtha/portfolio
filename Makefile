DOCKER_IMAGE=porfolio:0.1.1

push: web_build
	docker push registry.digitalocean.com/pxtha/$(DOCKER_IMAGE)

web_build:
	docker build -t registry.digitalocean.com/pxtha/$(DOCKER_IMAGE) .
