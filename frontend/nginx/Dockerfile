FROM nginx:latest
LABEL owner="wuuu"

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html


