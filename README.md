 Final Assignment: Build, Organize, and Deploy a Multipage Website
 
# 🚗 CarMart — Multipage Website

I built   CarMart  , a multipage web app where users can   list cars for sale  ,   browse available cars  , and   view details   for each car. I used   HTML, CSS, and JavaScript   for the front end, and   Firebase Realtime Database   to store and fetch data in real time.  

This project was created as the   final assignment for "Build, Organize, and Deploy a Multipage Website"  
## 🌐 Purpose
  Build a   fully working multipage website  
  Use   responsive design   and interactive elements
  Connect to a   cloud database   for live data
  Deploy a   production ready site online  

## 📋 Pages                       
•	`index.html` :  Home page with navigation  
•	`list.html`  : Form to add a car to Firebase  
•	`browse.html` : Shows all cars dynamically  
•	`details.html`   Displays details for one car  
•	`style.css` : Styles for all pages 
•	`script.js` : Handles Firebase and dynamic content 

## ⚙️ How CarMart Works

List Your Car: Navigate to the List a Car page, complete the form with car details, and submit. This information is stored in Firebase Realtime Database.

Browse Cars: On the Browse Cars page, all car listings are dynamically fetched from Firebase and displayed in a responsive grid.

View Details: Clicking on a car listing redirects to a detailed view, showcasing comprehensive information about the selected vehicle.

Responsive Design: The site is optimized for both desktop and mobile devices, ensuring a seamless user experience across various screen sizes.

Real-Time Data: Firebase ensures that any new car listings or updates are reflected immediately across all users' views.

## 🔧 Firebase Setup (to run locally)

1. Create a project in [Firebase Console](https://console.firebase.google.com/) called `carmart`.
2. Add a   Web App   and copy the Firebase config.
3. Create a   Realtime Database   in test mode.
4. Replace the Firebase config in `script.js` with your own keys:




