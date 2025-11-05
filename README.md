# Legal Document Search Portal
A web application for searching legal documents

### Option 1: Docker Setup (Recommended)

**Prerequisites:**
- Docker
- Docker Compose

**Steps:**
1. Clone or extract the project
2. Navigate to project directory
3. Run:
```bash
docker-compose up --build
``` 
4. Access application:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Option 2: Manual Setup

### Prerequisites:
- Node.js (v18 or higher)
- npm

# Steps:

# 1. Backend Setup:In terminal RUN 

cd backend
npm install
node server.js

# output : Backend runs on http://localhost:5000

# 2. Frontend Setup:
run in terminal:

cd frontend
npm install
npm start

# output :Frontend runs on http://localhost:3000



## Features

- Search legal documents by title
- Display document details (type, date, jurisdiction)
- Loading states
- Error handling
- Responsive design

## API Endpoints POST /api/search
Search legal documents

**Request:**
```json
{
  "query": "cyber security"
}
```

**Response:**
```json
{
  "success": true,
  "results": [matched_data],
  "count": 2,
  "query": "cyber security"
}
```

## Technologies

**Frontend:**
- React
- Tailwind CSS
- DaisyUI

**Backend:**
- Node.js
- Express
- CORS


**Manual/Script:**
Press `Ctrl+C` in terminal
