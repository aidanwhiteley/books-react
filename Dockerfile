# Docker file for running web tier of Books AngularJS application on nginx
#
# To build Docker image use:
# a) build application with "npm run build"
# b) "docker build --rm -t aidanwhiteley/books-web-react-gateway:v0.1.1 ."
# The version number here corresponds to the application version in docker-compose.yaml
#
# If you don't want to use then API gateway image as part of the solution, then you can use
# "docker build --rm -t aidanwhiteley/books-web-react:v0.1.1 ."
# (after changing the nginx config file copied in - see below)
# 
FROM nginx:1.27.2-alpine
COPY ./docker/nginx-apigateway-DOCKER.conf /etc/nginx/nginx.conf
#COPY ./docker/nginx-DOCKER.conf /etc/nginx/nginx.conf
ADD dist /var/www/localhost/books/
