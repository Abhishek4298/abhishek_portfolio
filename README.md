# Developer Portfolio

### To view a live example, **[click here](https://abhibhavsar.web.app/)**.
<!-- // Source code: https://github.com/1hanzla100/developer-portfolio -->

## Table of Contents

- [Sections](#sections)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Troubleshooting](#troubleshooting)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)

## Sections

✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Projects\
✔️ Github Profile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need the following installed on your computer:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
- [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) - Recommended for managing Node.js versions

### Node.js Version Requirements

```
node@v12.22.12 (Recommended and tested)
npm@6.14.16 or compatible
git@2.17.1 or higher
```

> **IMPORTANT**: This project originally used `node-sass@4.13.1` which has been replaced with the more compatible `sass` package. Node.js v12.x is still recommended for best compatibility with all dependencies.

## Installation Steps

From your command line, follow these steps:

```bash
# Clone this repository
$ git clone https://github.com/Abhishek4298/portfolio.git

# Go into the repository
$ cd portfolio

# If using NVM, switch to the compatible Node.js version
$ nvm install 12
$ nvm use 12

# Install dependencies
$ npm install

# Start the development server
$ npm start
```

### Troubleshooting

#### General Issues

If you encounter errors during installation or startup:

1. Make sure you're using Node.js v12.x: `node -v` should show v12.x.x
2. If using a different Node.js version, switch to v12 using NVM: `nvm use 12`
3. Clear npm cache if needed: `npm cache clean --force`
4. Reinstall dependencies: `npm install`

#### SCSS/Sass Issues

If you encounter SCSS compilation issues:

1. The project now uses `sass` (dart-sass) instead of `node-sass` for better compatibility
2. Custom webpack configuration is implemented using `react-app-rewired` and `customize-cra`
3. If you still have issues, try removing `node_modules` and reinstalling: `rm -rf node_modules && npm install`

#### React Lifecycle Warnings

The project includes utilities to suppress React lifecycle warnings from legacy dependencies:

- Warnings from `react-reveal` are suppressed via a utility in `src/utils/suppressWarnings.js`
- The `react-lottie` package has been replaced with `@lottiefiles/react-lottie-player` to fix lifecycle warnings

### Production Build

To create an optimized production build:

```bash
$ npm run build
```

### Deployment

#### Option 1: Deploy to Firebase (Recommended)

This portfolio is configured to be deployed to Firebase Hosting. Follow these steps to deploy:

1. **Switch to a compatible Node.js version** (Firebase CLI requires Node.js v14+):

```bash
$ nvm use 16  # or any version >= 14
```

2. **Install Firebase CLI globally**:

```bash
$ npm install -g firebase-tools
```

3. **Login to Firebase**:

```bash
$ firebase login
```

4. **Initialize Firebase in your project** (only needed for first-time setup):

```bash
$ firebase init
```

Select the following options during initialization:
- Choose "Hosting" as the feature
- Select your Firebase project or create a new one
- Specify "build" as your public directory
- Configure as a single-page app: Yes
- Set up automatic builds and deploys with GitHub: No

5. **Deploy to Firebase**:

```bash
$ firebase deploy
```

6. **After deployment, switch back to Node.js v12** for development:

```bash
$ nvm use 12
```

#### Option 2: Manual Deployment via Firebase Console

If you're having issues with the Firebase CLI, you can deploy manually:

1. Create a production build: `npm run build`
2. Go to [Firebase Console](https://console.firebase.google.com/)
3. Create a new project (if you don't have one already)
4. Navigate to Hosting in the left sidebar and click "Get started"
5. Follow the web UI instructions to deploy your site
6. Upload the contents of your `build` folder when prompted

#### Option 3: Serve Locally

To test the production build locally:

```bash
$ npm install -g serve
$ serve -s build
```

## Customization

### Linking Portfolio to Github

Update your GitHub username in the portfolio.js file:

```javascript
  // portfolio.js
  githubUserName: 'Abhishek4298',
```

### Updating Personal Information

All personal information is stored in the `src/portfolio.js` file. You can modify:

- Personal details and bio
- Skills and proficiency
- Education history
- Work experience
- Projects
- Contact information

### Adding or Modifying Sections

Each section of the portfolio is a React component located in `src/containers/`. To modify a section:

1. Locate the corresponding component in `src/containers/`
2. Update the JSX and styling as needed
3. Update the data in `src/portfolio.js`

### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

```javascript
import emoji from "react-easy-emoji";

const greeting = {
  title: "Hello 👋",
  subTitle: emoji("Full Stack Developer 🚀")
};
```

### Updating Styles

The project uses SCSS for styling:

1. Main styles are in `src/assets/scss/`
2. Component-specific styles are in their respective component folders
3. Bootstrap customization is in `src/assets/scss/bootstrap/`

## Technologies Used

- [React](https://reactjs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [reactstrap](https://reactstrap.github.io/)
- [react-reveal](https://www.react-reveal.com/)
- [@lottiefiles/react-lottie-player](https://www.npmjs.com/package/@lottiefiles/react-lottie-player)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)
- [sass](https://www.npmjs.com/package/sass) (dart-sass)
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
- [customize-cra](https://www.npmjs.com/package/customize-cra)

## Illustrations

- [Lottie File Source](https://lottiefiles.com)
