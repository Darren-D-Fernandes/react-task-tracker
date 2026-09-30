# Homework Task Tracker

**Course Project:** INEW-2434   
**Student Developer:** Darren D. Fernandes

An interactive frontend React application built with Vite that allows users to manage daily objectives with enhanced tracking features. This project connects to a localized browser data architecture and is prepared for future integration with a Java Spring Boot REST API.

## Project Structure
```text
react-task-tracker/
├── src/
│   ├── components/
│   │   ├── TaskCard.jsx       # Individual list items
│   │   ├── TaskForm.jsx       # Real-time data form 
│   │   ├── TaskList.jsx       # Dynamic array loop middleware (.map)
│   │   └── TaskSummary.jsx    # Refactored data summary 
│   ├── App.jsx                # Central State Control
│   ├── index.css              # Custom styling 
│   └── main.jsx               # Native HTML React injection engine
├── index.html                 # Main browser layout shell
├── package-lock.json
├── package.json               # Node local dependencies and Vite runtime scripts
└── README.md
```


## Features Completed
* **Core Functionality:** Dynamic task creation, checkbox completion toggles, and item deletion.
* **Input Validation:** Real-time trim checks to prevent empty or whitespace-only task submissions with responsive UI alert text.
* **Component Refactoring:** Extracted layout statistics into a dedicated, reusable `TaskSummary` component using props.
* **Task Priorities:** Implemented individual task metadata to classify items into High, Medium, and Low priorities.
* **Derived State Filters:** Implemented dynamic list views enabling real-time switching between All, Active, and Completed tasks.

## Installation & Running Instructions
To run this application locally on your machine, ensure you have [Node.js] installed, then follow these steps:

1. Clone or download this project repository folder to your machine.
2. Open the root folder directory in your command line/terminal.
3. Run the following command to download dependencies:
   ```bash
   npm install
   ```
4. Boot up the Vite local synchronization server using:
   ```bash
   npm run dev
   ```
5. Click or open the generated local network address inside your browser window which should look like this:
   `http://localhost:5173/`

