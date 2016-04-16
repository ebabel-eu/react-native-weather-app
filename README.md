# React native weather app
React native app that gives the weather of a number of cities.

## Install

```
npm install -g react-native-cli
npm install
```

## Development

While developing, keep running this localhost process:

```
react-native start
```

### iOS

In XCode, open ./ios/WeatherApp.xcodeproj

## Visual Studio Code setup [optional]

In your settings.json (User Settings), the following can be set to lint this project inline:

```
{
  "jshint.enable": false,
  "eslint.enable": true,
	"editor.tabSize": 2
}
```

You will also need to install the following plugins:

```
ext install eslint
```

Optionally, since this project is Wallaby enabled, you can install it:

```
ext install wallaby
```

## Initial setup

The command below does not need to be run again.

This app was initially scaffolded with:

```
react-native init WeatherApp .
```