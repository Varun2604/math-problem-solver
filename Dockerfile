# FROM python:3.6.1-alpine

# # Create app directory
# WORKDIR /app

# # Install app dependencies
# COPY src/requirements.txt ./

# # RUN pip install —upgrade setuptools
# RUN pip3 install -r requirements.txt

# # Bundle app source
# COPY src /app

# EXPOSE 8080
# CMD [ "flask", "run"]

FROM ubuntu:16.04

LABEL Maintainer="iyervarun2604@gmail.com"

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

# We copy just the requirements.txt first to leverage Docker cache
COPY ./src/requirements.txt /app/requirements.txt
COPY . /app

WORKDIR /app

RUN pip install -r requirements.txt

RUN pwd
RUN ls

ENTRYPOINT [ "python" ]

EXPOSE 5000

CMD [ "src/src.py" ]