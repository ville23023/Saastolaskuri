# 💰 Savings Application

A full-stack savings calculator app with signin/login features. 


## ⚙️ Features

- 🔐 User authentication (register/login)  
- 💸 Calculate savings   
- 🌐 RESTful API  

**Accessibility**

- The site is created to cater to common screen reader functionalities
- Initial tests done with NVDA
- User should be able to use the app in browser using screen readers and keyboard only the experience is still a bit clanky but useable.
- The site is ran through Wave site checker and returns no errrors
- App coloring done with accessibility in mind

**Work in progress**

- Screen reader functionalities need to be honed
- NVDA optimization is in order


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ville23023/Saastolaskuri
cd Saastolaskuri
```

### 2. Install dependencies

```bash
cd Frontend
npm install

# For server
cd Backend
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `Backend` directory with the following:

```
PORT= [PortOfYourChoosing]
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the application

```bash
# Start frontend
cd Frontend
npm run dev

# Start backend
cd Backend
nodemon server.js
```

## 📦 Tech Stack

**Frontend**

- React  
- TypeScript  
- Tailwind CSS  
- Vite  

**Backend**

- Node.js  
- Express  
- MongoDB + Mongoose  
- JSON Web Tokens (JWT)
- BCrytp

**Other Tools**

- Axios  
- dotenv  
- nodemon  


## 👨‍💻 Authors

Developed by :

 -[Otto A](https://github.com/OAnsaharju)
 -[Rebekka](https://github.com/Rebepekka)
 -[Ville](https://github.com/ville23023)
