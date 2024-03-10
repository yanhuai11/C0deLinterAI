const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to CodeLinterAI! Our automated code review tool uses machine learning to identify and suggest fixes for code quality issues. It integrates with popular IDEs and version control systems to streamline the development workflow and improve code maintainability.');
});

// Define route for the code review page
app.get('/code-review', (req, res) => {
  res.send('Our code review feature uses machine learning algorithms to identify and suggest fixes for code quality issues, including syntax errors, style violations, and security vulnerabilities.');
});

// Define route for the IDE integration page
app.get('/ide-integration', (req, res) => {
  res.send('Our IDE integration feature allows developers to run code reviews directly from their favorite IDEs, including Visual Studio Code, IntelliJ IDEA, and Eclipse, making it easy to identify and fix issues as they write code.');
});

// Define route for the version control integration page
app.get('/version-control-integration', (req, res) => {
  res.send('Our version control integration feature allows developers to run code reviews automatically as part of their version control workflow, ensuring that code quality issues are identified and fixed before they are merged into the main codebase.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});