# AnimeWorld Mobile App

**ANDROID APP URL**

Download - [http://bit.ly/3lmuPye]

**Installation**

```
npm i
```

**Run On Android**

```
npm start android
```

**APK build**

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug

(Apk path) - AnimeWorld/android/app/build/outputs/apk/debug/app-debug.apk
```

# API Source:

Search - [https://api.jikan.moe/v3/search/anime?q=naruto]

Search With Limit - [https://api.jikan.moe/v3/search/anime?q=naruto&limit=16]

Search With Page Number - [https://api.jikan.moe/v3/search/anime?q=naruto&limit=16&page=1]
