import simpleGit from "simple-git";
import path from "path";
import fs from "fs";

// Hardcoded configuration
const username = "isha71";  // Replace with your GitHub username
const email = "ishu.akjain@gmail.com";  // Replace with your GitHub email
const repoPath = "D:/VapourEx/daily_commit_bot_project";  // Replace with your repository path

const main = async () => {
  const git = simpleGit(repoPath);

  try {
    await git.addConfig("user.name", username);
    await git.addConfig("user.email", email);

    const filePath = path.join(repoPath, "streak.txt");
    const message = `Commit made at ${new Date().toISOString()}\n`;

    fs.appendFileSync(filePath, message);

    await git.add(".");
    await git.commit("Automated commit by bot");

    try {
      await git.push("origin", "main");
    } catch (err) {
      try {
        await git.push("origin", "master");
      } catch (err) {
        console.error("Failed to push to both main and master branches:", err);
        process.exit(1);
      }
    }

    console.log("Commit made successfully");
  } catch (err) {
    console.error("Error making commit:", err);
    process.exit(1);
  }
};

main();
