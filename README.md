# BlogByte

<div align="center">

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Appwrite](https://img.shields.io/badge/Appwrite-Backend%20as%20Service-FD3B5F?style=flat&logo=appwrite&logoColor=white)](https://appwrite.io)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

A modern, feature-rich personal blog platform built with **React** and **Appwrite**, designed for seamless content creation and management.

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)

</div>

---

## 🎯 About

BlogByte is a full-featured blogging platform that empowers writers to create, manage, and publish engaging content. Built with React for a responsive frontend and Appwrite for backend services, it combines modern web technologies with user-friendly design.

Whether you're a seasoned writer or just starting your blogging journey, BlogByte provides all the tools you need to share your thoughts with the world.

---

## ✨ Features

- **📝 Create & Edit Posts** - Write and edit blog posts with an intuitive editor
- **🎨 Responsive Design** - Beautiful UI that works seamlessly on desktop, tablet, and mobile
- **🔐 Secure Authentication** - Built-in user authentication powered by Appwrite
- **📊 Post Management** - Organize, categorize, and manage your blog content
- **⚡ Real-time Updates** - Instant synchronization across devices
- **🔍 SEO Friendly** - Optimized for search engines
- **📱 Mobile Optimized** - Fully responsive and touch-friendly interface
- **💾 Cloud Storage** - Reliable backend storage with Appwrite

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18+, JavaScript (ES6+) |
| **Styling** | CSS3 |
| **Backend/Database** | Appwrite |
| **Deployment** | Ready for deployment on any Node.js host |

**Language Composition:**
- JavaScript: 97.8%
- CSS: 1.4%
- HTML: 0.8%

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Appwrite** (self-hosted or cloud)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/NazimRiyadh/blogbyte.git
cd blogbyte
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and configure your Appwrite credentials:

```env
REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint.com/v1
REACT_APP_APPWRITE_PROJECT_ID=your_project_id
REACT_APP_APPWRITE_API_KEY=your_api_key
REACT_APP_APPWRITE_DATABASE_ID=your_database_id
REACT_APP_APPWRITE_COLLECTION_ID=your_collection_id
```

### 4. Start the Development Server

```bash
npm start
# or
yarn start
```

The application will open in your default browser at `http://localhost:3000`.

---

## 💻 Usage

### Creating a Blog Post

1. Log in to your BlogByte account
2. Click the "New Post" button
3. Enter your post title and content
4. Add tags and categories (optional)
5. Click "Publish" to make your post live

### Managing Posts

- **View**: Access all your published posts from the dashboard
- **Edit**: Click on any post to edit its content
- **Delete**: Remove posts you no longer want to display
- **Archive**: Keep posts hidden without deleting them

### Viewing Your Blog

- Visit your public blog page to see all published posts
- Readers can view individual posts and leave comments

---

## 📦 Project Structure

```
blogbyte/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Page components
│   ├── services/        # Appwrite and API services
│   ├── styles/          # CSS stylesheets
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── public/              # Static assets
├── .env.local           # Environment variables (not committed)
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

---

## 🔧 Configuration

### Appwrite Setup

1. Create an Appwrite account or set up a self-hosted instance
2. Create a new project and note the Project ID
3. Create a database and collection for blog posts
4. Set up authentication and appropriate permissions
5. Add your credentials to `.env.local`

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm run eject
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please ensure your contributions follow these guidelines:
- Write clean, readable code
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 🐛 Bug Reports & Features

Found a bug or have a feature request? [Open an issue](https://github.com/NazimRiyadh/blogbyte/issues) on GitHub!

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots (if applicable)
- Your environment details

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Support

- **Author**: [NazimRiyadh](https://github.com/NazimRiyadh)
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **Issues**: [GitHub Issues](https://github.com/NazimRiyadh/blogbyte/issues)

---

## 🙏 Acknowledgments

- [React](https://react.dev) - The JavaScript library for building user interfaces
- [Appwrite](https://appwrite.io) - Open-source backend-as-a-service platform
- All contributors and users who help improve BlogByte

---

<div align="center">

**Made with ❤️ by [NazimRiyadh](https://github.com/NazimRiyadh)**

⭐ If you find this project helpful, please consider giving it a star!

</div>
