# docker-training

[![Rodrigo Diego Quispe Laura](http://static.wixstatic.com/media/fbe5de_b19f78a706c54010a6c52118bf6065a0~mv2.png)](https://github.com/RodrigoQuispe/docker-training)

Using docker.

  - Install Docker
  - Hello world with Docker container
  - Contact

### Install Docker

- On [Windows](https://docs.docker.com/engine/installation/windows/)
- On [Mac](https://docs.docker.com/engine/installation/mac/) 
- On [Linux](https://docs.docker.com/engine/installation/)

### Hello world with Docker container

Open with terminal

- review  `./running.sh`.

``` sh
$ cd hello-world
$ ./running.sh
```

- other option

```
$ docker build -t nodeweb .
$ docker run --name hiworld -d -p 8080:8080 nodeweb
```
