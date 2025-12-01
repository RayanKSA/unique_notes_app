# Nebula Notes 🌌

**Nebula Notes** is a premium, visually stunning note-taking application designed for modern thinkers. Built with a focus on aesthetics and fluidity, it features a vibrant "Neon Lime" dark theme, glassmorphism effects, and a responsive masonry grid layout.

It works seamlessly as a **Progressive Web App (PWA)** and can be installed as a native **Android App** using Capacitor.

## ✨ Features

- **🎨 Premium Aesthetic**: Deep dark mode with vibrant Neon Lime accents and frosted glass elements.
- **📱 Responsive Grid**: Google Keep-style masonry layout that adapts to any screen size.
- **📌 Pinning**: Keep your most important thoughts at the top.
- **🎨 Color Coding**: Organize notes with a curated palette of colors.
- **💾 Auto-Save**: Never lose a thought; everything is persisted locally instantly.
- **⚡ PWA Support**: Installable on desktop and mobile with offline capabilities.
- **🤖 Android Ready**: Native Android build support via Capacitor.

## 🛠️ Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Variables, Glassmorphism)
- **Animations**: Framer Motion
- **Mobile Runtime**: Capacitor
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nebula-notes.git
    cd nebula-notes
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## 📱 Building for Android

This project uses **Capacitor** to wrap the web app into a native Android application.

1.  **Build the web assets**:
    ```bash
    npm run build
    ```

2.  **Sync with Android project**:
    ```bash
    npx cap sync
    ```

3.  **Open in Android Studio**:
    ```bash
    npx cap open android
    ```

4.  From Android Studio, you can run the app on an emulator or build an APK via **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve Nebula Notes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
