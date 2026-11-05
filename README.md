# Homework Task Tracker

**Course Project:** INEW-2434   
**Student Developer:** Darren D. Fernandes

An interactive full-stack[frontend + backend] Task Tracker application built with a Vite-powered React frontend connected directly to a synchronized, in-memory Java Spring Boot REST API.


## Project Structure

```text
react-task-tracker/
├── backend/                  # Java Spring Boot REST API
│   ├── .mvn/wrapper/         # Maven wrapper environment binaries
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/edu/example/tasktracker/
│   │   │   │   ├── TasktrackerApplication.java   # Spring Boot boot engine
│   │   │   │   ├── Task.java                    # Immutable Java data record model
│   │   │   │   ├── TaskRequest.java             # Incoming input validation layer
│   │   │   │   ├── TaskStore.java               # Thread-safe in-memory database store
│   │   │   │   └── TaskController.java          # REST API endpoints mapping /api/tasks
│   │   │   └── resources/
│   │   │       ├── static/                      # Default static assets location
│   │   │       ├── templates/                   # Default server-side template layout folder
│   │   │       └── application.properties       # Application properties configuration file
│   │   └── test/java/edu/example/tasktracker/
│   │       └── TasktrackerApplicationTests.java # Default generated context loading test
│   ├── .gitattributes        # Project attributes tracking configurations
│   ├── .gitignore            # Backend folder ignore specifications
│   ├── HELP.md               # Spring Boot generated starter documentation
│   ├── mvnw                  # Linux/macOS executable wrapper shell script
│   ├── mvnw.cmd              # Windows batch executable wrapper script
│   └── pom.xml               # Master Maven configurations & validation starters
├── frontend/                 # Vite-powered React Frontend UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx       # Individual list items with completion lines
│   │   │   ├── TaskForm.jsx       # Real-time data validation form
│   │   │   ├── TaskList.jsx       # Dynamic array loop rendering middleware (.map)
│   │   │   └── TaskSummary.jsx    # Refactored real-time statistical counters
│   │   ├── App.jsx                # Asynchronous state management and fetch operations
│   │   ├── index.css              # Global application styling definitions
│   │   └── main.jsx               # React framework entry point script
│   ├── index.html                 # Main browser HTML layout shell
│   ├── package-lock.json          # Node dependency locked installation map
│   └── package.json               # Node local dependencies and runtime scripts
├── .gitignore                # Root repository master ignore configuration rules
└── README.md                 # Master full-stack documentation
```


## Features Completed
* **Full-Stack CRUD Architecture:** Replaced local mock data hooks with asynchronous browser `fetch()` networks across `GET`, `POST`, `PUT`, and `DELETE` methods.
* **Thread-Safe Memory Layer:** Refactored the backend structure using modern Java **records** and `synchronized` collection blocks to handle real-time concurrency.
* **Input Validation Security:** Leveraged Spring Boot's `@Valid`, `@NotBlank`, and `@Size` annotations to block empty data models at the controller gate.
* **CORS Access Security:** Configured explicit Cross-Origin Resource Sharing protocols in Spring Boot to support async `PUT` and `DELETE` requests safely from port `5173`.
* **Graceful Failure Fallbacks:** Added real-time frontend condition handlers to present explicit warning banners if the backend server is temporarily offline.
* **Derived State Filters:** Kept the dynamic layout buttons enabling real-time toggles between All, Active, and Completed views.

## Installation & Running Instructions
To run this application locally on your machine, ensure you have **Java 21 (or higher)**, **Maven**, and **Node.js** installed, then follow these steps:

### 1. Run the Spring Boot Backend
1. Open your terminal and change directories into the backend project folder:
   ```bash
   cd backend
   ```
2. Build and boot up the API server using the Maven execution command:
   ```bash
   mvn spring-boot:run
   ```
*The server will initialize an internal web server broadcasting live task data structures at `http://localhost:8080/api/tasks`.*

### 2. Run the React Frontend
1. Open a **second, separate terminal window** and change directories into the frontend project folder:
   ```bash
   cd frontend
   ```
2. Download the required Node package modules and dependencies:
   ```bash
   npm install
   ```
3. Launch the local development synchronization engine:
   ```bash
   npm run dev
   ```
4. Click or open the generated local address inside your browser window (typically `http://localhost:5173/`) to manage your application!
