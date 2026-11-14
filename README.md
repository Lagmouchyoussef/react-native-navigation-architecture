<div align="center">

<h1>🏋️ Increment</h1>

<p><strong>A cross-platform React Native navigation demo</strong></p>
<p>Explore bottom-tab navigation, a native stack, and route-parameter passing in one compact app.</p>

<p>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-0.88.1-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-SDK_58-000020?style=for-the-badge&logo=expo&logoColor=FFFFFF">
  <img alt="React Navigation" src="https://img.shields.io/badge/React_Navigation-v7-6B53C3?style=for-the-badge">
</p>
<p>
  <img alt="iOS" src="https://img.shields.io/badge/iOS-supported-000000?style=flat-square&logo=apple&logoColor=white">
  <img alt="Android" src="https://img.shields.io/badge/Android-supported-3DDC84?style=flat-square&logo=android&logoColor=white">
  <img alt="Web" src="https://img.shields.io/badge/Web-supported-4285F4?style=flat-square&logo=googlechrome&logoColor=white">
</p>

</div>

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Application Screenshots](#-application-screenshots)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Run on the Web](#-run-on-the-web)
- [Run on a Mobile Device](#-run-on-a-mobile-device)
- [Project Structure](#-project-structure)
- [Navigation Flow](#-navigation-flow)
- [Validation](#-validation)
- [Troubleshooting](#-troubleshooting)

## 🎯 Overview

**Increment** is a small workout-tracking app built with React Native and Expo. It demonstrates a practical React Navigation setup: a bottom tab navigator switches between the main sections, while a native stack navigator opens an exercise detail screen and passes route parameters.

The Expo application lives in `Increment/`. Application screens and tab navigation are stored at the repository root and are included in Metro's watch folders.

## ✨ Features

| Screen | Purpose |
|---|---|
| **Workout Log** | Displays the workout log and opens the sample Squat exercise. |
| **My Routines** | Demonstrates the routines tab. |
| **Profile** | Demonstrates the profile tab. |
| **Exercise Details** | Displays the exercise name and ID passed from the workout log. |

## 🖼️ Application Screenshots

The screenshots below are captured from the running web build. The same React Native screens are shared with the mobile targets.

<table>
  <tr>
    <td align="center"><strong>1. Workout Log</strong><br><img src="./docs/images/workout-log.png" alt="Workout Log screen with the View exercise button" width="520"></td>
    <td align="center"><strong>2. My Routines</strong><br><img src="./docs/images/routines.png" alt="My Routines tab" width="520"></td>
  </tr>
  <tr>
    <td align="center"><strong>3. Profile</strong><br><img src="./docs/images/profile.png" alt="Profile tab" width="520"></td>
    <td align="center"><strong>4. Exercise Details</strong><br><img src="./docs/images/exercise-details.png" alt="Squat exercise details and exercise ID" width="520"></td>
  </tr>
</table>

## 🧩 Technology Stack

| Technology | Role |
|---|---|
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application language |
| [React Native](https://reactnative.dev/) | Cross-platform user interface |
| [Expo](https://expo.dev/) | Development server and app tooling |
| [React Navigation](https://reactnavigation.org/) | Bottom tabs and native stack |
| [React Native Web](https://necolas.github.io/react-native-web/) | Web platform support |
| [Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context) | Safe-area handling on mobile |
| [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/) | Status bar configuration |

## 🧰 Prerequisites

Install the following before starting:

- **Node.js** (the current LTS release is recommended) and **npm**;
- **Git**, if you plan to clone the repository;
- a modern browser for the web build;
- **Expo Go** on an iPhone or Android device for on-device testing.

> **Important:** run all npm and Expo commands from `Increment/`, where `package.json` and `package-lock.json` are located.

## 🚀 Getting Started

### 1. Clone the repository

```powershell
git clone https://github.com/Lagmouchyoussef/react-native-navigation-architecture.git
cd .\react-native-navigation-architecture
```

If you already have the project, open its repository folder instead.

### 2. Open the Expo application folder

From the repository root:

```powershell
cd .\Increment
```

### 3. Install the locked dependencies

```powershell
npm ci
```

Check that installed native modules match the Expo SDK:

```powershell
npx expo install --check
```

## 🌐 Run on the Web

Start the web development server from `Increment/`:

```powershell
npm run web
```

Open the URL printed in the terminal. Expo commonly uses `http://localhost:8081`. If that port is already occupied, use another one:

```powershell
npx expo start --web --port 8082
```

`localhost` refers to the current computer. A phone cannot use the computer's `localhost` address.

## 📱 Run on a Mobile Device

### iPhone or Android with Expo Go

1. Install or update **Expo Go** from the App Store or Google Play.
2. From `Increment/`, start Expo:

   ```powershell
   npm start
   ```

3. Wait for the QR code in the terminal or Expo's development page.
4. Scan the QR code with Expo Go.
5. Keep the Expo server running while using the app.

For LAN mode, the computer and phone must be on the same Wi-Fi network. If the network blocks local device connections, start an Expo tunnel:

```powershell
npx expo start --tunnel
```

Scan the refreshed QR code. Tunnels require an active internet connection and may be restricted by some networks.

### iOS on Windows

Windows cannot run Apple's iOS Simulator or perform a local Xcode build. Use **Expo Go on an iPhone** to test from Windows. The iOS Simulator and local native builds require macOS and Xcode.

### Android Emulator

To launch on an Android emulator configured with Android Studio:

```powershell
npm run android
```

Expo Go on a physical Android device is also supported.

## 🗂️ Project Structure

```text
react-native-navigation-architecture/
├── Increment/
│   ├── App.js
│   ├── app.json
│   ├── index.js
│   ├── metro.config.js
│   └── package.json
├── navigation/
│   └── MainTabs.js
├── screens/
│   ├── ExerciseDetailsScreen.js
│   ├── ProfileScreen.js
│   ├── RoutinesScreen.js
│   └── WorkoutLogScreen.js
├── docs/
│   └── images/
└── README.md
```

### Key Files

| Path | Responsibility |
|---|---|
| `Increment/App.js` | Root providers and native stack routes |
| `Increment/index.js` | Registers the Expo root component |
| `Increment/app.json` | Expo app metadata, orientation, and assets |
| `Increment/metro.config.js` | Adds the repository source folders to Metro's watch list |
| `Increment/package.json` | Dependencies and npm scripts |
| `navigation/MainTabs.js` | Declares the Workout Log, My Routines, and Profile tabs |
| `screens/WorkoutLogScreen.js` | Workout log screen and exercise navigation action |
| `screens/RoutinesScreen.js` | My Routines screen |
| `screens/ProfileScreen.js` | Profile screen |
| `screens/ExerciseDetailsScreen.js` | Exercise details and route parameter rendering |
| `docs/images/` | README screenshots |

## 🧭 Navigation Flow

```mermaid
flowchart TD
    A["Increment/App.js"] --> B["NavigationContainer"]
    B --> C["Native Stack"]
    C --> D["MainTabs"]
    D --> E["Workout Log"]
    D --> F["My Routines"]
    D --> G["Profile"]
    E -->|"View exercise + route parameters"| H["Exercise Details"]
    H -->|"Back"| D
```

The workout log opens the detail route and passes an exercise ID and name:

```js
navigation.navigate('ExerciseDetails', {
  exerciseId: 12,
  exerciseName: 'Squat',
});
```

`ExerciseDetailsScreen` reads these values from `route.params` and provides fallback text when a value is missing.

## ✅ Validation

Run these checks from `Increment/`:

```powershell
npx expo install --check
npx expo export --platform web
npx expo export --platform ios
```

The iOS export validates the JavaScript bundle for iOS; it is **not** a native Xcode build.

## 🛠️ Troubleshooting

| Issue | Resolution |
|---|---|
| `package.json` cannot be found | Change to the repository root, then run `cd .\Increment`. |
| The Expo port is already in use | Select another port, for example `npx expo start --web --port 8082`. |
| The phone cannot reach the development server | Do not use `localhost` on the phone. Try the same Wi-Fi network, then `npx expo start --tunnel`. |
| Expo Go reports an SDK mismatch | Update Expo Go, restart the server, and run `npx expo install --check`. |
| A module cannot be resolved | Confirm the terminal is in `Increment/`, then run `npm ci`. |
| The iOS Simulator will not start on Windows | This is expected. Use Expo Go on an iPhone or a Mac with Xcode. |
| The Expo tunnel disconnects | Check internet access, restart `npx expo start --tunnel`, and scan the new QR code. |

---

<div align="center">
  Built with React Native, Expo, and React Navigation.
</div>
