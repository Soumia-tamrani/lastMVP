FROM postgres:17.5-alpine3.22

COPY ./scripts/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh && \
    chown postgres:postgres /entrypoint.sh

USER postgres

ENTRYPOINT ["/entrypoint.sh"]