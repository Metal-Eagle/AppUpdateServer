# A easy to use Windows electron update server

### Installation

Requires [Node.js](https://nodejs.org/) v16.3.0 + to run.
Requires [Docker](https://docs.docker.com/docker-for-windows/install/)
Requires [Docker Compose](https://docs.docker.com/compose/install/)

Uses Docker Compose
```sh
$ docker-compose -f 'docker-compose.yml' up -d --build
```

### Note's
After adding the ".nupkg" and "RELEASES" rebuild docker image.