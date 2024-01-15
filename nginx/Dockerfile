# My solution
FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]


# Laravel solution
#FROM nginx:1.15.0-alpine
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d
#RUN mkdir /var/www/laravel/public -p && touch /var/www/laravel/public/index.php
#
## My solution
#FROM nginx:stable-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#ENTRYPOINT [ "/docker-entrypoint.sh" ]
#CMD [ "nginx", "-g", "daemon off;" ]