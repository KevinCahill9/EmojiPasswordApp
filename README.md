# Alphanumeric vs. Emoji Password App

This is a React Native app using Expo which allows users to sign up and log in using traditional alphanumeric passwords or incorporate emojis into their password.

## Prerequisites

Install dependencies

- **[Node.js](https://nodejs.org/en)** - Required for running the project.
- **Expo Go** (for running the app on a mobile device):
   - [IOS Download](https://apps.apple.com/gb/app/expo-go/id982107779)
   - [Android Download](https://play.google.com/store/apps/details?id=host.exp.exponent)

   


## Getting Started

### Clone the repository.
```bash
git clone https://github.com/KevinCahill9/EmojiPasswordApp.git

cd EmojiPasswordApp
```

### Install necessary dependencies.
```bash
npm install
```

### Start the development server.
```bash
npx expo start
```
### Running the app on your mobile device.
1. Open Expo Go on your phone.
2. Scan the QR code displayed within the terminal.
3. The app will launch, displaying the Signup Screen.

## App Feature Set

### Signup Screen
- Users are able to create an account by entering a username and password, using only alphanumeric characters or incorporated emojis.
- After signing up, users are then directed to the Login Screen. 
- Upon successful signup, the time taken to enter these registration details is displayed in the terminal.

### Login Screen
- Users enter their registration details which they created. 
- Login time and password information will be displayed in the terminal, alongside the total time taken to signup and login.
- Upon successful login, users are navigated to the Profile screen. 

### Profile Screen
User Options:
- Delete their account, returning them to the signup page. 
- Log out, also directing them back to the signup page.

