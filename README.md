# PostAway II - Social Media API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A comprehensive social media API built with Node.js, Express.js, and MongoDB. PostAway II provides all the essential features for a modern social media platform including user management, posts, comments, likes, friend connections, and secure authentication with OTP-based password reset.

## 🌟 Features

### 👤 User Management
- **User Registration & Authentication** - Secure signup/signin with JWT tokens
- **Profile Management** - Update user details, upload avatar images
- **Multi-device Login** - Support for multiple active sessions with device-specific logout
- **Password Security** - Bcrypt password hashing with salt rounds

### 📱 Social Features
- **Posts** - Create, read, update, delete posts with image uploads
- **Comments** - Add, edit, delete comments on posts
- **Likes System** - Like/unlike posts and comments with toggle functionality
- **Friends System** - Send, accept, reject friend requests with status tracking

### 🔒 Security & Authentication
- **JWT Authentication** - Secure token-based authentication
- **OTP System** - Email-based OTP for password reset functionality
- **Middleware Protection** - Protected routes with JWT verification
- **Input Validation** - Comprehensive data validation and sanitization

### 📧 Communication
- **Email Integration** - Nodemailer integration for OTP delivery
- **Request Logging** - Winston-based logging system for API monitoring

### 📚 API Documentation
- **Swagger UI** - Complete API documentation with interactive testing
- **Comprehensive Schemas** - Detailed request/response schemas for all endpoints

## 🛠️ Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **File Upload**: Multer middleware
- **Email Service**: Nodemailer
- **Logging**: Winston
- **API Documentation**: Swagger UI Express
- **Environment Configuration**: dotenv

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/postaway-ii.git
   cd postaway-ii
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database Configuration
   DB_URL=mongodb+srv://username:password@cluster.mongodb.net/postaway?retryWrites=true&w=majority

   # Server Configuration
   PORT=3000

   # JWT Secret Key
   SECRET_KEY=your_super_secret_jwt_key_here

   # Email Configuration (for OTP functionality)
   EMAIL_ADDRESS=your_email@gmail.com
   APP_PASSWORD=your_app_password_here
   ```

4. **Start the server**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

5. **Access the application**
   - API Server: `http://localhost:3000`
   - Swagger Documentation: `http://localhost:3000/api-docs`

## 📁 Project Structure

```
postaway-ii/
├── public/
│   ├── avatarImages/          # User avatar uploads
│   └── postImages/            # Post image uploads
├── src/
│   ├── config/
│   │   └── mongoose.config.js # MongoDB connection configuration
│   ├── error/
│   │   └── applicationerror.js # Custom error handling
│   ├── features/
│   │   ├── comments/          # Comment management
│   │   ├── friends/           # Friend system
│   │   ├── likes/             # Like functionality
│   │   ├── otps/              # OTP system
│   │   ├── post/              # Post management
│   │   └── user/              # User management
│   └── middlewares/
│       ├── errorHandler.js    # Request logging
│       ├── imgValidator.js    # Image upload validation
│       ├── jwtAuth.middleware.js # JWT authentication
│       └── sendMail.middleware.js # Email functionality
├── index.js                   # Application entry point
├── swagger.json              # API documentation
└── package.json              # Dependencies and scripts
```

## 🔌 API Endpoints

### Authentication
- `POST /api/postaway/user/signup` - Register new user
- `POST /api/postaway/user/signin` - User login
- `POST /api/postaway/user/logout` - Logout from current device
- `POST /api/postaway/user/logout-all-devices` - Logout from all devices

### User Profile
- `GET /api/postaway/user/get-details/:userId` - Get user details
- `GET /api/postaway/user/get-all-details` - Get all users
- `PUT /api/postaway/user/update-details/:userId` - Update user profile
- `POST /api/postaway/user/upload-avatar/:userId` - Upload user avatar

### Posts
- `GET /api/postaway/posts/:postId` - Get specific post
- `GET /api/postaway/posts` - Get all user posts
- `POST /api/postaway/posts` - Create new post
- `PUT /api/postaway/posts/:postId` - Update post
- `DELETE /api/postaway/posts/:postId` - Delete post

### Comments
- `GET /api/postaway/comments/:postId` - Get post comments
- `POST /api/postaway/comments/:postId` - Add new comment
- `PUT /api/postaway/comments/:commentId` - Update comment
- `DELETE /api/postaway/comments/:commentId` - Delete comment

### Likes
- `GET /api/postaway/likes/:id` - Get likes for post/comment
- `POST /api/postaway/likes/toggle/:id` - Toggle like status

### Friends
- `GET /api/postaway/friends/get-pending-requests` - Get pending requests
- `GET /api/postaway/friends/:userId` - Get user's friends
- `POST /api/postaway/friends/toggle-friendship/:friendId` - Send/cancel friend request
- `PUT /api/postaway/friends/response-to-request/:friendId` - Accept/reject request

### OTP System
- `POST /api/postaway/otp/send` - Send OTP to email
- `POST /api/postaway/otp/verify` - Verify OTP
- `POST /api/postaway/otp/reset-password` - Reset password with OTP

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. After successful login, include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 📊 Database Schema

### User Schema
```javascript
{
  name: String (required),
  age: Number (required),
  email: String (required, unique),
  password: String (required, hashed),
  gender: String (enum: ["Male", "Female", "Others"]),
  tokens: [String], // JWT tokens for active sessions
  avatarImages: [String], // Avatar image URLs
  posts: [ObjectId], // References to user's posts
  friends: [ObjectId] // References to friend relationships
}
```

### Post Schema
```javascript
{
  imageUrl: [String] (required),
  caption: String (required),
  userId: ObjectId (ref: User),
  likes: [ObjectId] (ref: Like),
  comments: [ObjectId] (ref: Comment)
}
```

### Comment Schema
```javascript
{
  userId: ObjectId (ref: User, required),
  postId: ObjectId (ref: Post, required),
  text: String (required),
  likes: [ObjectId] (ref: Like)
}
```

### Like Schema
```javascript
{
  userId: ObjectId (ref: User),
  likeable: ObjectId (ref: Post/Comment),
  on_model: String (enum: ["Post", "Comment"])
}
```

### Friend Schema
```javascript
{
  fromUser: ObjectId (ref: User),
  toUser: ObjectId (ref: User),
  status: String (enum: ["accepted", "pending", "rejected"])
}
```

## 🧪 Testing

Access the interactive API documentation and testing interface at:
`http://localhost:3000/api-docs`

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response schemas
- Interactive testing capabilities
- Authentication examples

## 📝 Logging

The application includes comprehensive logging using Winston:
- Request logging for all API calls (except signin/signup)
- Error logging with detailed stack traces
- Logs are stored in `log.txt` file

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
DB_URL=your_production_mongodb_url
PORT=3000
SECRET_KEY=your_production_secret_key
EMAIL_ADDRESS=your_production_email
APP_PASSWORD=your_production_app_password
```

### Recommended Production Setup
1. Use a process manager like PM2
2. Set up reverse proxy with Nginx
3. Enable HTTPS with SSL certificates
4. Use MongoDB Atlas for database hosting
5. Configure environment-specific variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 👨‍💻 Author

**Sagar Nautiyal**
- Email: sagarddn1@gmail.com
- GitHub: [@sagar-nautiyal](https://github.com/sagar-nautiyal)

## 🙏 Acknowledgments

- Express.js team for the robust web framework
- MongoDB team for the flexible NoSQL database
- All contributors to the open-source packages used in this project

---

**Note**: Remember to keep your `.env` file secure and never commit it to version control. Always use strong, unique passwords and JWT secret keys in production environments.
