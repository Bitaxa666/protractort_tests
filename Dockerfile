# In pull Docker instance.
FROM node:8.11.1

#create folder with tests
RUN mkdir -p /tests

#Install required applications
RUN echo 'deb http://httpredir.debian.org/debian jessie-backports main' >> /etc/apt/sources.list.d/jessie-backports.list
RUN apt-get update && \
    apt install -y -t jessie-backports openjdk-8-jre-headless ca-certificates-java && \
    apt-get install -y xvfb wget openjdk-8-jre && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg --unpack google-chrome-stable_current_amd64.deb && \
    apt-get install -f -y && \
    apt-get clean && \
    rm google-chrome-stable_current_amd64.deb

#Add java env
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

#Creating user
#RUN useradd -ms /bin/bash admin

#Changing user
#USER admin

#To avoid conflicts with host machine dbus
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

#версия npm and node, chrome version на машине
RUN npm -v
RUN google-chrome --version

# Set the working directory
WORKDIR /tests

#del node_modules
RUN ls -alt
COPY package.json /tests/package.json
RUN ls -alt

#копируем все файлы из текущего пути к файлу Docker на вашей системе в нашу новую папку образа
COPY . /tests/

# Make port 8091 available to the world outside this container for test
EXPOSE 5014

#Open the bash
CMD ["/bin/bash"]