FROM node:latest
LABEL maintainer="arnaud.birk@ign.fr"
LABEL version="1.0"

#ENV http_proxy=$http_proxy
#ENV https_proxy=$http_proxy

ADD api /usr/local/src/api

WORKDIR /usr/local/src/api

#RUN npm config set http-proxy $http_proxy
#RUN npm config set https-proxy $http_proxy

RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "serveur.js"]

