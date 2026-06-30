# ArgusIQ

An AI-powered cybersecurity intelligence dashboard that helps security teams monitor threats, assess organizational risk, and gain actionable insights through an intuitive, real-time interface.

---

## Features

-  Interactive security dashboard
-  AI-assisted threat analysis
-  Real-time risk monitoring and visualization
-  Threat insights and analytics
-  Modern, responsive user interface
-  Fast and intuitive user experience

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts

### Backend
- Node.js
- Express.js

### AI / Services
- OpenAI API 
- REST APIs

---

## Project Structure

```
ArgusIQ/
│
├── frontend/
├── backend/
└── README.md
```

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/argusiq.git
cd argusiq
```

---

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## Running the Project

### Start the Frontend

```bash
cd frontend
npm run dev
```

The frontend will usually be available at:

```
http://localhost:5173
```

---

### Start the Backend

Open another terminal and run:

```bash
cd backend
npm start
```



---

##  Dependencies

### Frontend

- React
- React DOM
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- Recharts
- Lucide React

### Backend

- Express
- CORS
- dotenv
- OpenAI 
- Nodemon *(development)*

---

##  Screenshots

_Add screenshots or GIFs of your dashboard here._

Example:

```
assets/dashboard.png
assets/analytics.png
```

---

##  Future Enhancements

- Multi-user authentication
- Role-based access control
- Dark mode
- Predictive threat detection
- Cloud deployment
- Exportable security reports

---

##  Team

- Raashi Dhamange
- Sarah Parekh
- Suzanne Daniel Thomas

---
## Lemma SDK Integration

ArgusIQ uses Lemma SDK as a secondary intelligence layer alongside our FastAPI backend:
- **Lemma Table**: Supplier risk data mirrored from our scoring engine
- **Lemma Agent (RiskAnalyst)**: Natural language Q&A over supplier risk data
- **Lemma App**: Live pod interface for risk queries

Live pod: https://argusiq.apps.lemma.work/

## 📄 License

This project was developed as part of a hackathon and is intended for educational and demonstration purposes.
