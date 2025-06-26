# 🏥 MedSecure - Medical Report Upload & Access Platform

**MedSecure** is a full-stack web application built to securely upload, store, and manage medical reports. Developed using the MERN stack with modern UI powered by Tailwind CSS, MedSecure is optimized for performance, security, and scalability.

---

## 🚀 Live Demo (Optional)
> You can deploy the frontend on [Vercel](https://vercel.com) and backend on [Render](https://render.com)  
> 🔗 **Frontend**: https://medsecure.vercel.app  
> 🔗 **Backend API**: https://medsecure-api.onrender.com

---

## ✨ Features

- 🔐 **JWT-based Login & Authentication**
- 📤 **Secure Report Uploads** (PDF, Images)
- 🧾 **Access Logs** page to view uploaded reports
- 🧠 MongoDB-based storage and retrieval
- 💅 Fully responsive UI with Tailwind CSS
- 🗂️ File uploads stored in server with metadata in MongoDB
- 🧪 Ready for real-world deployment (Render + Vercel)

---

## 🛠️ Tech Stack

**Frontend:** React, Tailwind CSS, React Router  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Auth:** bcryptjs, jsonwebtoken (JWT)  
**Dev Tools:** Postman, Git, Vercel, Render

---

## 📁 Folder Structure

<pre><code> ``` MedSecure/ ├── client/ # React frontend │ └── pages/ # UploadReport, AccessLogs, Login, Home ├── server/ # Express backend │ ├── routes/ # API routes │ ├── models/ # Mongoose schemas │ └── uploads/ # Uploaded files ├── .gitignore └── README.md ``` </code></pre>

## ⚙️ Local Setup Instructions

### 1. Clone the repository

git clone https://github.com/PrathyushaThulava/MedSecure.git
cd MedSecure

### 2. Install frontend dependencies
cd client
npm install
npm start

### 3. Install backend dependencies
cd ../server
npm install
npm run dev

### 4. Create .env in server/
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

---

### API Endpoints

<pre><code> ``` | Method | Endpoint | Description | |--------|--------------------|--------------------------| | POST | /api/auth/register | Register user | | POST | /api/auth/login | Login & get JWT token | | POST | /api/upload | Upload medical report | | GET | /api/reports | Get all uploaded reports | ``` </code></pre>

---

### 📸 Screenshots
<img src="[UR](https://github.com/user-attachments/assets/5d4e8ba1-2e5a-4895-9a27-293a52e50a65)" width="100%" />
<img src="[URL](https://github.com/user-attachments/assets/99b73431-ab8a-434d-9126-cf4fcb603d3c)" width="100%" />
<img src="[URL](https://github.com/user-attachments/assets/e135ce04-25a8-40ab-a4e3-4fa7c5eef0f0)" width="100%" />

---

### 🧑‍💻 Author

**Thulava Prathyusha**  
📧 [prathyushathulava@gmail.com](mailto:prathyushathulava@gmail.com)  
🔗 [GitHub](https://github.com/PrathyushaThulava) | [LinkedIn](https://linkedin.com/in/prathyusha-thulava-514215254)
