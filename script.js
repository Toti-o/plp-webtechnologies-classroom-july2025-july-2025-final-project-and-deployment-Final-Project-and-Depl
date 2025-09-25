// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, push, onValue, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// 🔑 Replace with your Firebase config
const firebaseConfig = {
   apiKey: "AIzaSyDWIdtkCqT31wNV7GgdArMUTV0bW-9ddHQ",
  authDomain: "carmart-fdc2f.firebaseapp.com",
  // This is the line to add for Realtime Database:
  databaseURL: "https://carmart-fdc2f-default-rtdb.firebaseio.com",
  projectId: "carmart-fdc2f",
  storageBucket: "carmart-fdc2f.firebasestorage.app",
  messagingSenderId: "739394473367",
  appId: "1:739394473367:web:48fd9e083a378082d508d2",
  measurementId: "G-8YJQPS8N3R"

};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle form submission (list.html)
const form = document.getElementById("carForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const car = {
      makeModel: document.getElementById("makeModel").value,
      year: document.getElementById("year").value,
      price: document.getElementById("price").value,
      description: document.getElementById("description").value,
      image: document.getElementById("image").value || "https://via.placeholder.com/250"
    };

    push(ref(db, "cars"), car).then(() => {
      alert("Car listed successfully!");
      form.reset();
    });
  });
}

// Display cars on browse.html
const carList = document.getElementById("carList");
if (carList) {
  const carsRef = ref(db, "cars");
  onValue(carsRef, (snapshot) => {
    carList.innerHTML = "";
    snapshot.forEach((childSnapshot) => {
      const car = childSnapshot.val();
      const key = childSnapshot.key;
      const card = document.createElement("div");
      card.classList.add("car-card");
      card.innerHTML = `
        <img src="${car.image}" alt="Car">
        <h3>${car.makeModel}</h3>
        <p>Year: ${car.year}</p>
        <p>Price: $${car.price}</p>
        <a href="details.html?id=${key}" class="btn">View Details</a>
      `;
      carList.appendChild(card);
    });
  });
}

// Show details on details.html
const detailsDiv = document.getElementById("carDetails");
if (detailsDiv) {
  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get("id");
  const carRef = ref(db, "cars/" + carId);

  get(carRef).then((snapshot) => {
    if (snapshot.exists()) {
      const car = snapshot.val();
      detailsDiv.innerHTML = `
        <div class="car-card">
          <img src="${car.image}" alt="Car">
          <h2>${car.makeModel}</h2>
          <p><strong>Year:</strong> ${car.year}</p>
          <p><strong>Price:</strong> $${car.price}</p>
          <p><strong>Description:</strong> ${car.description}</p>
        </div>
      `;
    } else {
      detailsDiv.innerHTML = "<p>Car not found.</p>";
    }
  });
}
