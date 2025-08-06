# Use a lightweight web server image
FROM nginx:alpine

# Copy all your static website files to nginx's default web directory
COPY . /usr/share/nginx/html

# Expose port 8080 (instead of default 80)
RUN sed -i 's/80;/8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
