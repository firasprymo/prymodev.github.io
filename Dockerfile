FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./dist/monportfolio /usr/share/nginx/html
COPY ./nginx/*.env ./nginx/nginx.conf /etc/nginx/ui/
COPY ./nginx/run_nginx.sh /etc/nginx/ui/scripts/
CMD ["/bin/bash", "/etc/nginx/ui/scripts/run_nginx.sh"]
