# EmployWise Assignment

This project is a **React-based User Management Application** using the Reqres API. It provides user authentication, user listing with pagination, editing, and deletion functionalities. The design is responsive, with a modern interface built using Tailwind CSS.

---

The application can be accessed live via the following link:  
**[EmployWise User Management App](https://employ-wise-user-management-kdukys069-yashrajhans-projects.vercel.app/login)**  

## Features

### **1. Authentication**

- **Login Page**:
  - Allows users to authenticate via the Reqres API.
  - Validates user credentials and redirects to the user dashboard upon successful login.
  - If authentication fails, an error message is displayed.
  - ![image](https://github.com/user-attachments/assets/b7542afd-3213-4a60-80a8-ea1ee3de8571)


### **2. User Management**

- **Paginated User List**:

  - Displays users fetched from the Reqres API with pagination.
  - The `page` query parameter is used to track the current page (`users?page=1`, `users?page=2`, etc.).
  - Implements client-side search and filtering to find users by their `first_name`, `last_name`, or `email`.
  - A `Previous` button disables when on the first page, and a `Next` button disables if no more users are available for the next page.
    ![image](https://github.com/user-attachments/assets/b7696656-2d04-4d8f-bab6-5bbe2798ad4a)

    Filtering
    ![image](https://github.com/user-attachments/assets/a6f29d96-c879-4cc4-9665-9e3dfb317a0c)



- **Edit User Details**:

  - Allows users to update their `first_name`, `last_name`, and `email` via a form.
  - After editing, an API call is made to update the user data, and the user is redirected back to the user list.
  - Displays an error message if the update fails.
    ![image](https://github.com/user-attachments/assets/93b67130-664c-4692-a5f2-2991d676e1bc)


- **Delete Users**:
  - Provides a button for deleting a user from the list.
  - Once deleted, the list is updated automatically without a page reload.
  - A confirmation message is shown when the delete action is successful or fails.
  - ![image](https://github.com/user-attachments/assets/aeb3b0c9-a6d3-456e-adba-ad970ec634f0)


### **3. Responsive Design**

- **Tailwind CSS**:
  - Provides a clean and modern UI.
  - Fully responsive, adapting to devices of all screen sizes (mobile, tablet, desktop).
  - Uses grid layouts and responsive utilities to ensure a smooth experience across devices.

### **4. Error Handling**

- Graceful handling of API errors:
  - If fetching or deleting users fails, an alert box informs the user.
  - Input validation for forms to ensure no fields are left empty.

---

## Installation and Setup

### Clone the repository

```bash
git clone <repository-url>
cd employwise-assignment
npm install

```
src/
├── components/
│   ├── Login.jsx        # Handles user authentication and login page UI
│   ├── UsersList.jsx    # Displays the paginated, searchable user list with options to edit and delete users
│   ├── EditUser.jsx     # Handles the functionality to edit user details
├── index.css            # Tailwind CSS styles for the app
├── index.js             # Entry point for the React app
├── App.jsx              # Main App component and routing setup for navigation
└── tailwind.config.js   # Tailwind CSS configuration file

## Features Implementation

- **React Router**: This application uses React Router for navigation between different pages, including the **Login**, **Users List**, and **Edit User** pages.
- **Axios**: Axios is used to make API calls to the **Reqres API** to fetch user data, handle user authentication, and perform operations like editing and deleting users.
- **React Hooks**: The application is built using **React Hooks** for state management, including `useState` for storing user data, pagination state, and search input, as well as `useEffect` for handling side effects such as fetching data from the API.
- **Pagination**: The pagination feature ensures that only a limited number of users are displayed at a time, with the ability to navigate between pages using **Next** and **Previous** buttons.
- **Tailwind CSS**: Tailwind CSS is used for styling, ensuring a **modern and responsive design** using utility-first classes that make the design adaptable to various screen sizes.
- **Filtering**: A client-side search and filtering feature is implemented, allowing users to filter through the list of users by **first name**, **last name**, or **email**. The filter is applied dynamically as users type in the search bar, providing an intuitive and responsive experience.
- **Edit/Delete Alerts**: After performing actions like editing or deleting a user, the application shows **alert messages** to inform the user about the success or failure of the operation. If the operation fails, an appropriate error message is shown.

---

### 1. **Framework & Libraries**:
   - **React** is used as the frontend framework for building the user interface.
   - **React Router** is employed for navigation between pages such as **Login**, **Users List**, and **Edit User**.
   - **Axios** is used to make HTTP requests to the **Reqres API** for user data, authentication, and CRUD operations (create, read, update, delete).
   - **React Hooks** are used for managing component state and side effects. For instance, `useState` is used to store user data and pagination information, and `useEffect` is used to fetch data when the page loads or when the page changes.
   - **Tailwind CSS** is used for styling the UI. Utility-first classes provide a responsive and modern design, ensuring that the app is mobile-friendly as well.

### 2. **User Interface**:
   - The **UI is responsive** using Tailwind CSS, ensuring that the layout works seamlessly on both desktop and mobile devices.
   - For styling, I used Tailwind’s utility-first classes, which made it easy to create modern designs like buttons, cards, and input fields that are responsive.
   - For example, the **user list** is displayed in a **grid layout**, which adjusts from 1 column on mobile to 4 columns on larger screens. The user cards are styled with shadow and rounded corners for a clean look.

### 3. **Error Handling**:
   - I implemented **error handling for API requests**. Whenever a request fails (such as when fetching users, updating, or deleting), an alert is displayed with an appropriate error message.
   - On form submission (such as the login or edit user form), I added **validation** to ensure the fields are not empty, and provided feedback to the user if any required fields are missing.
   - For instance, in the **Login page**, I check if the credentials are correct and show a message if the login attempt fails.

### 4. **Persistence**:
   - The **login token is stored in localStorage** after the user logs in. This ensures that the user remains logged in even after the page is reloaded or the app is reopened.
   - If the token is missing or expired, the app **redirects the user to the login page** using React Router.
   - This is implemented in the `UsersList` component, where the token is checked in the `useEffect` hook. If no token is found, it navigates to the **login page**.

### 5. **Code Quality**:
   - The application is structured with clean, **modular components** such as `Login.jsx`, `UsersList.jsx`, and `EditUser.jsx` to handle distinct functionalities like login, user list display, and editing user data.
   - I used **React Hooks** (`useState`, `useEffect`) to manage state and side effects efficiently, avoiding the need for class-based components.
   - The code is well-documented with comments to explain the purpose of each component and function, making it easier to maintain and extend.

### 6. **Submission**:
   - The project is hosted on **GitHub** and includes a **README file** that explains how to run the project, install dependencies, and any important considerations or assumptions made during development.
   - The README also includes instructions on setting up the **React app**, how to use the API, and how to run it locally or deploy it.

### 7. **AI Usage**:
   - I used **ChatGPT** to help me with certain coding challenges, like creating custom components and improving the UI. However, the majority of the project was completed independently, and I used my understanding of React, Axios, and Tailwind CSS to implement the features.

### 8. **Bonus Points**:
   - **Client-Side Search and Filtering**: I implemented a search functionality where users can filter through the list of users based on **first name**, **last name**, or **email**. The search input field filters users in real-time as the user types.
   - **React Router**: I used **React Router** to enable navigation between different pages (Login, User List, and Edit User).
   - **Hosting**: The project is deployed on **Heroku** (or any other free server like Netlify, Vercel) to make it publicly accessible. The link to the deployed app is provided in the README file.
   - The filtering feature uses the `filter()` method on the user data array to display users whose name or email matches the search query. This filtering is applied every time the user types in the search bar, and the UI dynamically updates to show the filtered list.

