<h1 align="center">
	<img src="https://user-images.githubusercontent.com/60140867/195171575-77386ac8-a453-4a5d-988c-9dc6297c8ddf.svg#gh-light-mode-only" alt="QRCode Generator Logo" width= "250" />

   <img src="https://user-images.githubusercontent.com/60140867/195171589-af93a1c1-ff4c-45fa-b1a3-6f327163fec1.svg#gh-dark-mode-only" alt="QRCode Generator Logo" width= "250" />
</h1>

<h2 align="center">
  QRCode Generator
</h2>

<p align="center">
  <a href="#overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#screenshots">Screenshots</a>
</p>

## Overview

<h1 align="center">
	<img src="https://user-images.githubusercontent.com/60140867/195171585-fab21c0d-27a3-484d-b51e-645ee703229a.gif" alt="QRCode Generator Demo" />
</h1>

This is a web application that generates a QR code for a URL. The web application allows you to customize, save and track the number of QR code scans.

## Features

- Generating QR codes
- Downloading QR codes
- Customizing the color pattern and code background
- Adding a logo to QR codes
- Tracking the number of scans
- Save / Delete your own codes
- Toast Notifications
- JWT Authorization (Access and Refresh token)
- Email address confirmation
- Advanced functionality for verified accounts

## Technologies

### Frontend

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://nodejs.org/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [qrcode.react](https://www.npmjs.com/package/qrcode.react)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/about/)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- SMTP Server

### Installation

1. Clone the project and access the folder

   ```sh
   # Clone this repository
   git clone https://github.com/Romychan/qrcode-generator.git

   # Go into the repository
   cd qrcode-generator
   ```

2. Install server and client dependencies

   ```sh
   # Go into client
   cd client

   # Install client dependencies
   npm install

   # Go into server
   cd ../server

   # Install server dependencies
   npm install
   ```

3. Create an `.env` file for client and server

   In `client/.env`:

   ```sh
   REACT_APP_URL=http://localhost:3000
   REACT_APP_BASE_URL=http://localhost:5000
   REACT_APP_BASE_URL_API=http://localhost:5000/api
   ```

   In `server/.env`:

   ```
   PORT=5000
   BASE_URL=http://localhost:5000
   CLIENT_URL=http://localhost:3000
   MONGO_URI=<YOUR_MONGODB>
   JWT_ACCESS_SECRET=<YOUR_JWT_ACCESS_SECRET_KEY>
   JWT_REFRESH_SECRET=<YOUR_JWT_REFRESH_SECRET_KEY>
   SMTP_HOST=<YOUR_SMTP_HOST>
   SMTP_PORT=<YOUR_SMTP_HOST>
   SMTP_USER=<YOUR_SMTP_EMAIL>
   SMTP_PASSWORD=<YOUR_SMTP_PASSWORD>
   ```

4. Run the app from `server` directory

   ```sh
   npm run dev
   ```

## Screenshots

**Generator**

<img src="https://user-images.githubusercontent.com/60140867/195171588-8518c867-b373-44a8-ba79-d53b6a1f1b92.png" alt="QRCode Generator Page" />

**Saved QRCodes**

<img src="https://user-images.githubusercontent.com/60140867/195171579-2d33e229-b4d5-4568-8a00-9a4f515cd7f3.png" alt="Saved QRCodes Page" />

**Authorization**

<img src="https://user-images.githubusercontent.com/60140867/195171581-2fa1c641-f5b8-4dc6-afbf-630bb3b4a4c7.png" alt="Authorization Page" />
