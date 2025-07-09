# Spreadsheet Assignment – Intern Design Challenge

A responsive, editable spreadsheet-style web app built to match the Figma design, using React, TypeScript, Tailwind CSS, and Vite.

Live Demo: https://assignment-inky-omega.vercel.app/ 
Figma Design: https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535



# Features

- Excel-like interface with keyboard navigation (Arrow keys, Enter, Tab)
- Conditional styling for **Status** and **Priority** cells
- Sticky headers & scrollable body
- Mock data rendering via `Details` array
- Placeholder **Add Column** functionality
- Tailwind styling aligned with Figma


# Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS (no custom CSS)
- Mock data for demo purposes


# Project Structure
src/
├── assets/ # Icon components
├── components/ # Table.tsx (main spreadsheet)
├── mockdata/ # MockData.ts
├── App.tsx # Root app component
└── main.tsx # Vite entry point

# Known Issues
- bg-clip-text removed—no gradient text feedback

- “Add Column” button is static

- No data persistence or API integration
# Trade-offs & Notes

- `bg-clip-text` was considered for status coloring, but due to Tailwind's limitations and text visibility issues, I opted for solid backgrounds for clarity.
- Column resizing and hiding were skipped due to time constraints.

# Setup & Run
- Clone the repo

* bash
- Copy
- Edit
- git clone https://github.com/bnikita11/Assignment.git
- cd Assignment
- Install dependencies

* bash
- Copy
- Edit
- npm install
- Run development server

* bash
- Copy
- Edit
- npm run dev
- Open in browser at http://localhost:5173

# Author
Nikita Baniya – React Developer Intern
GitHub: bnikita11
