#!/bin/bash

src="${1-./img/splash.png}"

ffmpeg -i ${src} -s 640x1136 ../ios/CardC/splash/Default-568h@2x~iphone.png -y
ffmpeg -i ${src} -s 750x1334 ../ios/CardC/splash/Default-667h.png -y
ffmpeg -i ${src} -s 1242x2208 ../ios/CardC/splash/Default-736h.png -y
ffmpeg -i ${src} -s 640x960 ../ios/CardC/splash/Default@2x~iphone.png -y
ffmpeg -i ${src} -s 320x480 ../ios/CardC/splash/Default~iphone.png -y
ffmpeg -i ${src} -s 320x568 ../ios/CardC/splash/splash.png -y
mkdir -p ../android/app/src/main/res/drawable
cp ../ios/CardC/splash/splash.png ../android/app/src/main/res/drawable/splash.png
