# Keeper App (React JS)

This project is a fully functional and responsive note-taking application built using React JS. It is inspired by Google Keep and allows users to create and manage notes in an intuitive and clean interface.

Objective:
The aim of this project is to demonstrate the use of modern React JS concepts while building a real-world, modular, and interactive web app. The project focuses on:
- Building a reusable component-based architecture
- Implementing responsive design
- Managing state using React Hooks
- Styling using Bootstrap or Tailwind CSS instead of inline CSS
- Using only arrow functions and JSX for cleaner, modern code
- Alerting the user when they try to submit empty input fields

Features:
- Add new notes with a title and description
- Delete notes individually
- Alerts appear when the input field is empty and the Add button is clicked
- Uses React functional components and the useState hook
- Arrow functions used for all component and logic definitions
- Fully responsive across all screen sizes
- Styled using Bootstrap or Tailwind CSS (no inline styling used)
- Clean and visually appealing design

#Live Deploy: https://keeperappx.netlify.app/


Folder Structure:
- public/
    - index.html
- src/
    - components/
    -IOHandler.jsx
    -IOHandler.css
    - DataList/
        -ShowCard.jsx
        -ShowCard.css
    -Form/
        -InoutForm.jsx
        -InoutForm.css
    - UI/
        - Header.jsx
        - Header.css
        - Footer.jsx
        - Footer.css
  - App.js
  - App.css
  - index.js
- package.json
- README.md

Technologies Used:
- React JS
- JSX
- React Hooks (useState)
- Bootstrap
- HTML5, CSS3

How to Run Locally:
1. Clone the repository:
   git clone https://github.com/immortalvivaan461/Keeper-App.git
   cd Keeper-App

2. Install the dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open your browser and visit:
   http://localhost:XYZ...

Input Validation:
- If the title or description field is empty and the Add button is clicked, the user will receive an alert.
- This prevents the creation of empty notes and improves usability.

Learnings:
- Breaking a React app into clean, reusable components
- Using props to pass data between components
- Handling form input and state using hooks
- Creating a responsive UI using Bootstrap
- Managing component updates and rendering based on dynamic state

Future Enhancements:
- Add local storage or backend integration for persistent note saving
- Add the ability to edit existing notes
- Implement categories, color tags, or search functionality for better note organization

License:
This project is open-source and free to use under the MIT License.

Author:
Vivaan – https://github.com/immortalvivaan461

