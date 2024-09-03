# Daily Commit Bot

This is a simple bot that automatically makes a commit to your GitHub repository whenever the script runs. This guide will walk you through the steps to set up and use the bot, even if you're new to GitHub and Git.

## Prerequisites

Before you begin, make sure you have the following:

1. **A GitHub Account**: If you don't have one, [sign up here](https://github.com/).

2. **Git Installed on Your System**: Download and install Git from [this link](https://git-scm.com/downloads). Follow the instructions for your operating system.

## Getting Started

### Step 1: Fork and Clone the Repository

1. **Fork the Repository**: Click the "Fork" button at the top right corner of the repository page on GitHub.

2. **Clone the Repository**:
   - Open your terminal or command prompt.
   - Run the following command to clone the repository to your local machine:

     ```bash
     git clone https://github.com/YOUR_USERNAME/daily-commit-bot.git
     ```

     Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Install Node.js and npm

- **Download Node.js**: If you don't have Node.js installed, [download it from here](https://nodejs.org/).
- **Install Node.js and npm**: Follow the installation instructions for your operating system. npm (Node Package Manager) comes bundled with Node.js.

### Step 3: Install Project Dependencies

1. **Navigate to the Project Directory**:

   ```bash
   cd daily-commit-bot

2. **Install Dependencies: Run the following command to install the necessary packages:**
    ```bash 
    npm install

### Step 4: Configure the script

1. **Open the `server.js` file in your preferred code editor (e.g., VSCode, Sublime Text).**

2. **Configure the following variables:**
```bash 
const username = "YOUR_GITHUB_USERNAME";
const email = "YOUR_GITHUB_EMAIL";
const repoPath = "YOUR_LOCAL_REPO_PATH"; // e.g., "D:/Projects/daily-commit-bot"
```
Replace the placeholders with your GitHub username, email, and the path to your local repository.

### Step 5: Run the Script
**After configuring the script, you're ready to run it:**
```bash
node server.js
