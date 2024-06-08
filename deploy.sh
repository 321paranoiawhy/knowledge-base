#!/bin/bash

KNOWLEDGE_BASE="knowledge-base"
readonly  KNOWLEDGE_BASE

echo "[INFO] Start building ${KNOWLEDGE_BASE} image."
docker build -t ${KNOWLEDGE_BASE} .
# shellcheck disable=SC2181
if [[ "$?" = "0" ]]; then
  echo "[INFO] Build ${KNOWLEDGE_BASE} image successfully."
else
  echo "[ERROR] Fail to build ${KNOWLEDGE_BASE} image."
  exit 1
fi

# 判断是否已存在正在运行的容器
if [[ -n $(docker ps -q -f "name=${KNOWLEDGE_BASE}") ]]; then
  echo "[INFO] Container<${KNOWLEDGE_BASE}> is already running, try remove it forcefully."
  docker rm -f ${KNOWLEDGE_BASE}
  echo "[INFO] Container<${KNOWLEDGE_BASE}> has been removed"
else
  echo "[INFO] Container<${KNOWLEDGE_BASE}> is not running, just do nothing here."
fi

echo "[INFO] Start running ${KNOWLEDGE_BASE} container."
docker run -itd -p 8002:80 --name ${KNOWLEDGE_BASE} ${KNOWLEDGE_BASE}
echo "[INFO] ${KNOWLEDGE_BASE} container is running."
echo "[SUCCESS] Please visit link http://localhost:8002/knowledge-base."
