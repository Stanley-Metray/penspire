# PENSPIRE (Blog Project)

A blog platform where users can post blogs, rate, comment, and share them. This project is built using Node.js, Express, MongoDB, HTML, CSS, JavaScript, and Bootstrap.

## Features

- **User Authentication**: Users can register, log in, and log out.
- **Blog Creation**: Registered users can create, edit, and delete their own blogs.
- **Blog Rating**: Users can rate blogs (e.g., 1 to 5 stars).
- **Comments**: Users can comment on blogs.
- **Sharing**: Blogs can be shared with other users.
- **Admin Features**: Admin users can manage all blogs, moderate comments, etc.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose for ODM)
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Authentication**: JWT (JSON Web Tokens) for user authentication

## Installation

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Steps to Set Up

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/blog-project.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd blog-project
    ```

3. **Set up the backend**:
    - Go to the `backend` folder (this will be created later):
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

4. **Set up the frontend**:
    - Go to the `frontend` folder (this will be created later):
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

5. **Configure environment variables**:
    - Create a `.env` file inside the `backend` directory and add necessary environment variables such as:
      ```
      MONGO_URI=your-mongodb-uri
      JWT_SECRET=your-jwt-secret
      ```

6. **Start the Backend Server**:
    - In the `backend` folder:
      ```bash
      npm start
      ```

7. **Start the Frontend**:
    - In the `frontend` folder:
      ```bash
      npm start
      ```

### Folder Structure

At the moment, the project has the following structure. The directories for `backend` and `frontend` are planned but not yet created:

```plaintext
blog-project/
│
├── backend/              # (Planned) Backend server files
│   ├── config/           # (Planned) Configuration files (DB, JWT secret, etc.)
│   ├── controllers/      # (Planned) Logic for handling requests
│   ├── models/           # (Planned) Mongoose models (Blog, User, etc.)
│   ├── routes/           # (Planned) API routes
│   ├── .env              # (Planned) Environment variables (ignored by Git)
│
├── frontend/             # (Planned) Frontend files
│   ├── public/           # (Planned) Static assets (images, icons)
│   ├── src/              # (Planned) Source code (HTML, CSS, JS, etc.)
│   ├── assets/           # (Planned) Additional assets
│
└── .gitignore            # Git ignore file
