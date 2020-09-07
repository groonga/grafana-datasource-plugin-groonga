FROM debian:buster

RUN \
  apt update && \
  apt install -y curl && \
  apt clean && \
  rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
