# Use an official Python runtime as a parent image
FROM selenium/standalone-chrome:latest

#создаем папку, где будет наша программа
RUN sudo mkdir -p /tests

#копируем все файлы из текущего пути к файлу Docker на вашей системе в нашу новую папку образа
COPY . /tests/

#update system
RUN sudo apt-get update

#install npm
RUN sudo apt-get install -y npm

#update node
RUN sudo npm cache clean -f
RUN sudo npm install -g n
RUN sudo n stable

#node version
RUN node -v

#install build-essential
RUN sudo apt-get install -y build-essential

#версия npm and node, chrome version на машине
RUN npm -v
RUN google-chrome --version

# Set the working directory
WORKDIR /tests

#del node_modules
RUN ls -alt
RUN sudo rm -rf node_modules

#скачиваем зависимые пакеты
RUN ls -alt
RUN npm config set unsafe-perm=true
RUN npm install

#install npm i webdriver-manager

# Запуск тестов
RUN npm run protractor

# Make port 8091 available to the world outside this container for test
EXPOSE 8091

# Run app.py when the container launches
CMD /tests/e2e-tests