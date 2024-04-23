DOCKER_IMAGE=porfolio:0.0.1

web_build:
	BUILD_VERSION=$(BUILD_VERSION) docker compose up -d --build
