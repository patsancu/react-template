# React + Vite

This template provides a minimal setup to get React working in Vite with tailwind and (TODO) progressive web app config

* Steps to customize
    * Change `name` in `package.json` and `package-lock.json`
    * Change title in `index.html` file

* Steps to run
    * `npm i`

### PWA stuff
There's a script,
`npm run generate-pwa-assets`

that generates assets. The source asset is in `/public/logo.svg` (the default is the vite logo).

Generated assets are referenced here

```
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" sizes="180x180" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF">
    <meta name="theme-color" content="#ffffff">
```

With `npm run build`, it will bundle the app and put all the required files into the /dist directory.

With `npm run preview`, the option to install(-ish) the app will appear on the browser
