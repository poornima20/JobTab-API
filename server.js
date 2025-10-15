const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

//Load companies
const dataPath = path.join(__dirname,'companies.json');
let companies = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Helper function to read latest data from JSON
function getCompanies() {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(raw);
}

//Root route
app.get('/',(req, res) => {
    res.send('Company Jobs API is live !');
});

//Get all Companies
app.get('/api/companies', (req,res) => {
    res.json(companies);
});

//Start the server
const PORT = process.env.POST || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});