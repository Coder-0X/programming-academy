# 🚀 Programming Academy

A comprehensive, interactive learning platform for mastering 5 programming languages: **HTML**, **CSS**, **JavaScript**, **Java**, and **Python**. Each language track contains 10 progressive levels, from beginner to advanced concepts.

## ✨ Features

- **50 Interactive Levels** - 10 levels per language track
- **Progressive Difficulty** - From beginner to advanced concepts
- **Beautiful Modern UI** - Responsive design that works on all devices
- **Progress Tracking** - Save your progress and earn XP points
- **Achievement System** - Unlock achievements as you advance
- **Interactive Code Examples** - Learn by doing with hands-on exercises
- **Cross-Language References** - See how concepts relate across languages

## 🎯 Language Tracks

### 📝 HTML Track (10 Levels)
1. Basic Structure & Tags
2. Forms & Input Elements  
3. Semantic HTML5
4. Multimedia & Embedding
5. Tables & Data
6. Advanced Forms
7. Accessibility & ARIA
8. Web Components
9. Progressive Enhancement
10. Modern HTML APIs

### 🎨 CSS Track (10 Levels)
1. CSS Basics & Selectors
2. Box Model & Layout
3. Flexbox Layout
4. CSS Grid
5. Responsive Design
6. Animations & Transitions
7. Advanced Selectors & Pseudo-classes
8. CSS Variables & Custom Properties
9. Modern CSS Features
10. Performance & Optimization

### ⚡ JavaScript Track (10 Levels)
1. Variables & Data Types
2. Functions & Scope
3. Arrays & Objects
4. DOM Manipulation
5. Events & Interactivity
6. Async/Await & Promises
7. ES6+ Features
8. APIs & Fetch
9. Object-Oriented Programming
10. Advanced Patterns & Frameworks

### ☕ Java Track (10 Levels)
1. Syntax & Basic Concepts
2. Object-Oriented Programming
3. Collections & Data Structures
4. Exception Handling
5. File I/O & Streams
6. Multithreading
7. Generics & Annotations
8. Design Patterns
9. Spring Framework
10. Advanced Java & Performance

### 🐍 Python Track (10 Levels)
1. Syntax & Basic Concepts
2. Data Structures
3. Functions & Modules
4. Object-Oriented Programming
5. File Handling & Exceptions
6. Libraries & Packages
7. Web Development (Flask/Django)
8. Data Science & Pandas
9. Machine Learning Basics
10. Advanced Python & Frameworks

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/programming-academy.git
   cd programming-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create an OAuth 2.0 Client ID in Google Cloud Console:**
   - Go to **APIs & Services** > **Credentials**
   - Click **Create Credentials** > **OAuth client ID**
   - Select **Web application**
   - Under **Authorized JavaScript origins** add `http://localhost:3000`
   - Under **Authorized redirect URIs** also add `http://localhost:3000` (to avoid redirect_uri_mismatch errors)
   - Copy the **Client ID**

4. **Create a `.env.local` file in the project root with:**
   ```env
   VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000` to start learning!

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
programming-academy/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Main page components
│   │   ├── HomePage.tsx     # Landing page with language selection
│   │   ├── LanguageTrack.tsx # Individual language track overview
│   │   └── LevelPage.tsx    # Individual level content
│   ├── data/                # Static data and content
│   │   └── languageTracks.ts # All language tracks and levels
│   ├── context/             # React context for state management
│   │   └── ProgressContext.tsx # User progress tracking
│   ├── types/               # TypeScript type definitions
│   └── index.css           # Global styles with Tailwind CSS
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 🏆 Progress Tracking

The academy automatically saves your progress in local storage, including:
- Completed levels per language
- Total XP earned
- Current level in each track
- Achievement unlocks
- Learning streak data

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add new levels** - Expand existing language tracks
2. **Add new languages** - Create tracks for new programming languages
3. **Improve exercises** - Add more interactive coding challenges
4. **Enhance UI** - Improve the user interface and experience
5. **Fix bugs** - Report and fix any issues you find

### Adding a New Level

1. Open `src/data/languageTracks.ts`
2. Find the appropriate language track
3. Add a new level object to the `levels` array
4. Include all required properties: `id`, `title`, `description`, `difficulty`, `topics`, `estimatedTime`
5. Optionally add `codeExample`, `exercises`, and `prerequisites`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all the developers who contribute to open-source education
- Inspired by various online learning platforms
- Built with love for the programming community

## 📧 Contact

- **GitHub Issues** - For bug reports and feature requests
- **Email** - your-email@example.com
- **Twitter** - @yourusername

---

**Happy Learning! 🚀** Start your programming journey today and master all 5 languages!
