# ReviewApp(Fitpage-SDE1)
# Event Review Application

This is a simple Event Review Application developed using Node.js and Supabase. The application allows users to create events, leave reviews for events, and view event details along with associated reviews.

## Features

- User Authentication: Users can sign up and log in to the application securely.
- Event Management: Users can create events with details such as title, description, and date.
- Review System: Users can leave reviews for events, including ratings and comments.
- CRUD Operations: Complete CRUD (Create, Read, Update, Delete) operations for events and reviews.

## Technologies Used

- Node.js: JavaScript runtime for server-side development.
- Express.js: Web application framework for Node.js used for routing and middleware.
- Supabase: Open source Firebase alternative for backend services such as authentication, databases, and storage.
- JSON Web Tokens (JWT): Used for authentication and securing API endpoints.
- Other dependencies: `@supabase/supabase-js` for Supabase client, `jsonwebtoken` for JWT authentication, etc.

## Database Diagram
<img width="623" alt="uml" src="https://github.com/vy211/ReviewApp/assets/29013344/7ae9b519-d0e5-4b9e-b0ba-756e23fc0fa5">


## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/vy211/ReviewApp.git
   ```


Sure, here's the continuation of the README content:

```bash
cd ReviewApp
npm install
```
Set Up Supabase: Sign up for a free account on Supabase and create a new project. Obtain your Supabase URL and Anon Key.

Configure Supabase: Create a .env file in the root directory of the project and add your Supabase URL and Anon Key:
```bash
PORT = 7000
SUPA_URL = https://clencqbfytkzoqzhzmfc.supabase.co
SUPA_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZW5jcWJmeXRrem9xemh6bWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzM0NzksImV4cCI6MjAyNzEwOTQ3OX0.uHcIzlNuwkQ1dhyRvze3cogwlrSArStaNi5TivJev0o
```
Start the Application: Run the application using the following command:
```bash
npm start
```
Access the Application: Open your web browser and navigate to http://localhost:7000 to access the Event Review Application.

## Snapshot of Postman to using this
<img width="960" alt="event" src="https://github.com/vy211/ReviewApp/assets/29013344/74958038-0c70-4a43-b1bf-1381791507f9">



Usage
Sign Up: Create a new user account by providing your name, email, and password.
Log In: Log in to the application with your email and password.
Create Events: Once logged in, you can create new events by providing the required details.
Leave Reviews: Users can leave reviews for events, including ratings and comments.
View Event Details: Users can view details of events, including associated reviews.
Folder Structure
```bash
event-review-app/
│
├── controllers/          # Controllers for handling HTTP requests
│   ├── authController.js # Controller for user authentication
│   ├── eventController.js # Controller for managing events
|   ├── userController.js  #controller for managing the user 
│   └── reviewController.js # Controller for managing reviews
│
├── middleware/           # Middleware functions
│   └── authMiddleware.js # Middleware for JWT authentication
│
├── models/                # Models for interacting with the database
│   ├── userModel.js      # Model for user-related operations
│   ├── eventModel.js     # Model for event-related operations
│   └── reviewModel.js    # Model for review-related operations
│
├── routes/                # Route definitions
│   ├── authRoutes.js     # Routes for user authentication
│   ├── eventRoutes.js    # Routes for event-related operations
|   ├── userRoutes.js     #Routes for directly manage user
│   └── reviewRoutes.js   # Routes for review-related operations
|
│
├── supabase.js            # Supabase initialization
├── server.js              # Entry point of the application
└── .env                    # Environment variables file
```
