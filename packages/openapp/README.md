# NativeScript Open App plugin

A NativeScript plugin for opening other applications on the device (with app store fallback)

## Reference

This plugin is a copy of https://github.com/ludwiktrammer/nativescript-open-app
You can find more examples there. The API did not change, only the way you import the function (see below)

## Installation

Run the following command from the root of your project:

```
tns plugin add @carployee/openapp
```

## Usage

### Android

To open an app, you need its id (for example "com.facebook.katana" for Facebook and "com.twitter.android" for Twitter).
You can easily find it in app's URL on https://play.google.com.

#### Examples

```
import { OpenApp } from '@carployee/openapp';

OpenApp.open('message://');
```

### iOS

To open an app on iOS you need a schema registered by the app.
Additionally you are required to whitelist the schemas for all apps you want to be able to open. Add them to your `app/App_Resources/iOS/Info.plist` (and additionally include "itms-apps" schema used by the App Store):

```
  <key>LSApplicationQueriesSchemes</key>
  <array>
    <string>itms-apps</string>
    <string>twitter</string>
  </array>
```
