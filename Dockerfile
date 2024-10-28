# Docker file for running web tier of Books AngularJS application on nginx
#
# To build Docker image use:
# a) build application with "npm run build"
# b) build Docker image with "docker build --rm -t aidanwhiteley/books-web-react:v0.1.1 ."
# The version number here corresponds to the application version in docker-compose.yaml
#
# If you want to use an API gateway above the Java microservices change the commented line below
# and build an alternative Docker image with the command
# "docker build --rm -t aidanwhiteley/books-web-react-gateway:v0.1.1 ."
FROM nginx:1.27.2-alpine
#COPY nginx-DOCKER.conf /etc/nginx/nginx.conf
COPY nginx-apigateway-DOCKER.conf /etc/nginx/nginx.conf
ADD dist /var/www/localhost/books/
