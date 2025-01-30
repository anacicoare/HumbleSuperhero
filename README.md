
# **Humble Superhero Project**

This repository contains both the **backend** and **frontend** applications for managing superheroes. The project allows users to add new superheroes and view a dynamic roster, showcasing full-stack development with **NestJS**, **Next.js**, **Mantine**, **Tailwind CSS**, and **Framer Motion**.

---

## **Project Structure**

```
HumbleSuperhero/
  ├── humble-superhero-api/                # Backend application (NestJS)
  └── next-app-mantine-tailwind-template/  # Frontend application (Next.js)
```

### **Backend (humble-superhero-api)**
- **Tech Stack:** Node.js, NestJS, TypeScript
- **Purpose:** Provides a RESTful API for managing superheroes.
- **Key Features:**  
  - Add a new superhero (POST `/superheroes`)
  - Retrieve the list of superheroes (GET `/superheroes`)

Navigate to the [humble-superhero-api](./humble-superhero-api/README.md) folder for more details on setup, features, and API documentation.

---

### **Frontend (next-app-mantine-tailwind-template)**
- **Tech Stack:** Next.js, React, Mantine, Tailwind CSS
- **Purpose:** Provides an interactive web interface for the API.
- **Key Features:**  
  - Form to add new superheroes
  - Dynamic superhero list with real-time updates

Navigate to the [next-app-mantine-tailwind-template](./next-app-mantine-tailwind-template/README.md) folder for more details on setup, features, and user guide.

---

## **How This Works**

1. **Backend**:
   - The API provides endpoints to add and retrieve superheroes.
   - The backend runs on **http://localhost:8000** by default (configurable in `.env`).

2. **Frontend**:
   - The frontend fetches data from the API and displays it.
   - The application runs on **http://localhost:4000** by default

3. **Workflow**:
   - Users can enter a superhero's name, superpower, and humility score through the frontend form.
   - Upon submission, the backend validates and stores the data, then returns a success or error response.
   - The frontend dynamically updates the superhero list based on the API response.

---

## **Setup Instructions**

### **Step 1: Clone the repository**
```bash
git clone https://github.com/anacicoare/HumbleSuperhero.git
```

### **Step 2: Install dependencies for both backend and frontend**
1. Navigate to the backend directory and install dependencies:
   ```bash
   cd humble-superhero-api
   npm install
   ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../next-app-mantine-tailwind-template
   npm install
   ```

### **Step 3: Run the backend**
Navigate to the backend directory and start the server:
```bash
cd humble-superhero-api
npm run start:dev
```

### **Step 4: Run the frontend**
Navigate to the frontend directory and start the development server:
```bash
cd ../next-app-mantine-tailwind-template
npm run dev
```

### **Step 5: Open the application**
Visit **http://localhost:4000** to access the superhero management interface.

---

## **If I Had More Time**

1. **Deployment**:  
   Deploy the frontend and backend to production environments (e.g., **Vercel** for the frontend, **Heroku** or **AWS** for the backend). Configure CORS and environment variables accordingly for secure cross-origin communication.

2. **Persistent Database**:  
   Replace the in-memory storage with a database like **PostgreSQL** or **MongoDB** for long-term data persistence.

3. **Enhanced Security**:  
   Implement authentication (e.g., **JWT**-based) to restrict access to the API.

4. **Testing Improvements**:  
   Add integration tests to ensure end-to-end functionality, along with enhanced unit test coverage.

5. **Frontend Enhancements**:  
   Improve the user interface with features like loading spinners, client-side filtering, and search.

---


Thank you for exploring the **Humble Superhero Project**! We appreciate your feedback and suggestions.
