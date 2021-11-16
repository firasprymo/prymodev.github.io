set -a
 env > "/tmp/priority.env"
 . "/etc/nginx/ui/$NODE_ENV.env"
 . "/tmp/priority.env"
 set +a
envsubst '
 ${NODE_ENV}
 ${UI_RESOLVER}
 ${HOST_MACHINE_ADDRESS}
 ' < /etc/nginx/ui/nginx.conf > /etc/nginx/nginx.conf

nginx -c /etc/nginx/nginx.conf -g 'daemon off;'

