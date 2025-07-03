# Portfolio <a href="https://github.com/1hanzla100/developer-portfolio/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/1hanzla100/developer-portfolio"></a><a href="https://github.com/1hanzla100/developer-portfolio/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/1hanzla100/developer-portfolio"></a><a href="https://github.com/1hanzla100/developer-portfolio/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/1hanzla100/developer-portfolio"></a> <a href="https://github.com/1hanzla100/developer-portfolio/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/1hanzla100/developer-portfolio"></a>

### To view a live example, **[click here](abhibhavsar.web.app/)**.

## Table of Contents

- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Linking portfolio to Github](#linking-portfolio-to-github)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
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

### Production Build

To create an optimized production build:

```bash
$ npm run build
```

## Linking Portfolio to Github

```javascript
  // portfolio.js
  githubUserName: 'Abhishek4298',
```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

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
