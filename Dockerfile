FROM nginx:alpine

ENV PORT 8080


RUN rm -rf /usr/share/nginx/html/*


COPY . /usr/share/nginx/html

EXPOSE 8080
