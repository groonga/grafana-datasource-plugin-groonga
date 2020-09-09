#!/bin/bash

set -eu

curl \
  --data-urlencode name=Logs \
  --data-urlencode flags=TABLE_NO_KEY \
  --fail \
  --get \
  http://groonga:10041/d/table_create

curl \
  --data-urlencode table=Logs \
  --data-urlencode name=timestamp \
  --data-urlencode flags=COLUMN_SCALAR \
  --data-urlencode type=Time \
  --fail \
  --get \
  http://groonga:10041/d/column_create

curl \
  --data-urlencode name=Hosts \
  --data-urlencode flags=TABLE_HASH_KEY \
  --data-urlencode key_type=ShortText \
  --fail \
  --get \
  http://groonga:10041/d/table_create

curl \
  --data-urlencode table=Logs \
  --data-urlencode name=host \
  --data-urlencode flags=COLUMN_SCALAR \
  --data-urlencode type=Hosts \
  --fail \
  --get \
  http://groonga:10041/d/column_create

curl \
  --data-urlencode table=Logs \
  --data-urlencode name=traffic \
  --data-urlencode flags=COLUMN_SCALAR \
  --data-urlencode type=Int64 \
  --fail \
  --get \
  http://groonga:10041/d/column_create

curl \
  --data-urlencode table=Logs \
  --data-urlencode name=n_alerts \
  --data-urlencode flags=COLUMN_SCALAR \
  --data-urlencode type=UInt32 \
  --fail \
  --get \
  http://groonga:10041/d/column_create

echo "[" > logs.json
echo "[\"timestamp\", \"host\", \"traffic\", \"n_alerts\"]," >> logs.json
now=$(date +%s)
for timestamp in $(seq $[now - 3600] 5 $now) $(seq $now 5 $[now + 3600]); do
  host="host-$[RANDOM % 10]"
  traffic=$[RANDOM % 1000000]
  if [ $[RANDOM % 2] -eq 0 ]; then
    traffic=$[-traffic]
  fi
  n_alerts=$[RANDOM % 32]
  echo "[${timestamp}, \"${host}\", ${traffic}, ${n_alerts}]" >> logs.json
done
echo "[$[now + 3605], \"${host}\", ${traffic}, ${n_alerts}]" >> logs.json
echo "]" >> logs.json

curl \
  --data-binary @logs.json \
  --fail \
  --header "Content-Type: application/json" \
  http://groonga:10041/d/load?table=Logs
