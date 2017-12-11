# Ionic CrossPlatform app

![N|Solid](https://lh3.googleusercontent.com/proxy/gWdbl4iSVA6zoZt6zBGKPVHQZ0di96NpkmYgu5vN_XGpLNRFNSU4Uvasy9hpchnDuOsXRdac0B7KJbbDD-2gP5opqa1FPJRa9CghhNsPOQvM_FqDw8imI6UIQKb5dxY=s400-p-k)

A cross_platform robotics Fsr mobile phone app devolopped with ionicframework to control a robot with various methods :
- Bluetooth
- Wi-fi (still in dev)
- Voice (still in dev)
- Gyroscope (still in dev)

# Screenshots 
- Home
![N|Solid](https://image.ibb.co/dHYonw/screen1.png)

- Nav_page
![N|Solid](https://image.ibb.co/mHotLG/screen2.png)

- Bluetooth
![N|Solid](https://image.ibb.co/kj7ESw/screen4.png)

![N|Solid](https://image.ibb.co/eaOhEb/screen5.png)

## Steps to set the environment : "Ubuntu"
First, install [Node JS](https://nodejs.org/en/) Then, install the latest Cordova and Ionic command-line tools in your terminal. 


### Installation


Install Ionic 

```sh
$ npm install -g cordova ionic
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd /yourPath/Native_App
$ (sudo) npm install -d
$ ionic cordova platform add android
or
$ ionic cordova platform add ios
$ ionic cordova build android
$ ionic serve
```

For test on device 

```sh
$ ionic cordova run android --device
or
$ ionic cordova run ios --device
```
Full Doc of Ionic [Here](https://ionicframework.com/getting-started) .

### Todos

 - Wifi
 - Voice Control
 - Gyroscope 

**Have Fun !**

