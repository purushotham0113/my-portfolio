const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;
app.use('/images', express.static('images'));


// Middleware
app.use(cors());
app.use(express.json());

// Data file paths
const dataDir = path.join(__dirname, 'data');
const projectsFile = path.join(dataDir, 'projects.json');
const skillsFile = path.join(dataDir, 'skills.json');
const dsaFile = path.join(dataDir, 'dsa.json');
const contactFile = path.join(dataDir, 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Helper function to read JSON file
const readJSONFile = (filePath, defaultData = []) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    return defaultData;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return defaultData;
  }
};

// Helper function to write JSON file
const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
};

// Initialize data files with sample data
const initializeData = () => {
  // Projects data
  const projectsData = [
    {
      id: 1,
      title: "Job Tracking System",
      description: "A full-stack e-commerce platform with user authentication, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/purushotham0113/applicant-tracking-system",
      liveLink: "https://applicant-tracking-system-client.onrender.com/",
      // image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
      image: './images/ATS.png'
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["React", "Firebase", "Material-UI", "Node.js"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://task-manager-demo.vercel.app",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      techStack: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-dashboard-demo.vercel.app",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Skills data
  const skillsData = [
    { id: 1, name: "JavaScript", category: "Frontend", level: 90 },
    { id: 2, name: "React", category: "Frontend", level: 85 },
    { id: 3, name: "Node.js", category: "Backend", level: 80 },
    { id: 4, name: "MongoDB", category: "Database", level: 75 },
    { id: 5, name: "Express.js", category: "Backend", level: 80 },
    { id: 6, name: "Python", category: "Programming", level: 85 },
    { id: 7, name: "C++", category: "Programming", level: 90 },
    { id: 8, name: "TypeScript", category: "Frontend", level: 75 },
    { id: 9, name: "Git", category: "Tools", level: 85 },
    { id: 10, name: "Docker", category: "DevOps", level: 70 },
    { id: 11, name: "Java", category: 'rogramming', level: '80' }
  ];

  // DSA data
  const dsaData = {
    totalProblems: 450,
    platforms: [
      { name: "LeetCode", solved: 200, total: 2500 },
      { name: "Codeforces", solved: 150, total: 1000 },
      { name: "HackerRank", solved: 100, total: 500 }
    ],
    recentProblems: [
      {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        platform: "LeetCode",
        topic: "Array, Hash Table",
        link: "https://leetcode.com/problems/two-sum/"
      },
      {
        id: 2,
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        platform: "LeetCode",
        topic: "Tree, Stack",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
      },
      {
        id: 3,
        title: "Maximum Subarray",
        difficulty: "Medium",
        platform: "LeetCode",
        topic: "Array, Dynamic Programming",
        link: "https://leetcode.com/problems/maximum-subarray/"
      }
    ]
  };

  // Initialize files if they don't exist
  if (!fs.existsSync(projectsFile)) {
    writeJSONFile(projectsFile, projectsData);
  }
  if (!fs.existsSync(skillsFile)) {
    writeJSONFile(skillsFile, skillsData);
  }
  if (!fs.existsSync(dsaFile)) {
    writeJSONFile(dsaFile, dsaData);
  }
  if (!fs.existsSync(contactFile)) {
    writeJSONFile(contactFile, []);
  }
};

// API Routes

// Get all projects
app.get('/api/projects', (req, res) => {
  const projects = readJSONFile(projectsFile, []);
  res.json(projects);
});

// Get all skills
app.get('/api/skills', (req, res) => {
  const skills = readJSONFile(skillsFile, []);
  res.json(skills);
});

// Get DSA data
app.get('/api/dsa', (req, res) => {
  const dsa = readJSONFile(dsaFile, {});
  res.json(dsa);
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const contacts = readJSONFile(contactFile, []);
  const newContact = {
    id: Date.now(),
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  contacts.push(newContact);

  if (writeJSONFile(contactFile, contacts)) {
    res.json({ message: 'Contact form submitted successfully' });
  } else {
    res.status(500).json({ error: 'Failed to save contact form' });
  }
});

// Initialize data
initializeData();
app.get('/health', (req, res) => {
  res.send("server running")
})
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});