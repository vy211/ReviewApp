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

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/event-review-app.git
   ```


Sure, here's the continuation of the README content:

markdown
Copy code
Install Dependencies: Navigate to the project directory and install the dependencies using npm or yarn:
Copy code
```bash
cd event-review-app
npm install
```
Set Up Supabase: Sign up for a free account on Supabase and create a new project. Obtain your Supabase URL and Anon Key.

Configure Supabase: Create a .env file in the root directory of the project and add your Supabase URL and Anon Key:

makefile
Copy code
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
Start the Application: Run the application using the following command:

bash
Copy code
npm start
Access the Application: Open your web browser and navigate to http://localhost:3000 to access the Event Review Application.

Usage
Sign Up: Create a new user account by providing your name, email, and password.
Log In: Log in to the application with your email and password.
Create Events: Once logged in, you can create new events by providing the required details.
Leave Reviews: Users can leave reviews for events, including ratings and comments.
View Event Details: Users can view details of events, including associated reviews.
Folder Structure
```bash
Copy code
event-review-app/
│
├── controllers/          # Controllers for handling HTTP requests
│   ├── AuthController.js # Controller for user authentication
│   ├── EventController.js# Controller for managing events
│   └── ReviewController.js # Controller for managing reviews
│
├── middleware/           # Middleware functions
│   └── authMiddleware.js # Middleware for JWT authentication
│
├── models/                # Models for interacting with the database
│   ├── UserModel.js      # Model for user-related operations
│   ├── EventModel.js     # Model for event-related operations
│   └── ReviewModel.js    # Model for review-related operations
│
├── routes/                # Route definitions
│   ├── authRoutes.js     # Routes for user authentication
│   ├── eventRoutes.js    # Routes for event-related operations
│   └── reviewRoutes.js   # Routes for review-related operations
│
├── supabase.js            # Supabase initialization
├── server.js              # Entry point of the application
└── .env                    # Environment variables file
