const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const legalDocuments = [
  
  {
    id: 1,
    title: "The Constitution of Bangladesh",
    summary: "Supreme law establishing fundamental rights, state principles, and governmental structure of Bangladesh",
    documentType: "Constitutional Document",
    date: "1972-11-04",
    jurisdiction: "Bangladesh",

  },
  {
    id: 2,
    title: "The Constitution Amendment Act 2011",
    summary: "Major amendments to the Constitution restoring parliamentary system and constitutional provisions",
    documentType: "Constitution Amendment",
    date: "2011-06-30",
    jurisdiction: "Bangladesh",
    
  },
  {
    id: 3,
    title: "The Constitution Rights Protection Act 2018",
    summary: "Legislation protecting fundamental constitutional rights and providing enforcement mechanisms",
    documentType: "Constitution Law",
    date: "2018-12-15",
    jurisdiction: "Bangladesh",
  },
  {
    id: 4,
    title: "Cyber Security Act 2023",
    summary: "Addresses digital crimes, online harassment, data protection, and cyber-related offenses in Bangladesh",
    documentType: "Cyber Law",
    date: "2023-09-14",
    jurisdiction: "Bangladesh",
  },
  {
    id: 5,
    title: "Digital Cyber Security Act 2018",
    summary: "Regulates digital security, prevents cybercrimes, and establishes penalties for online offenses",
    documentType: "Cyber Law",
    date: "2018-09-19",
    jurisdiction: "Bangladesh",
  },
  {
    id: 6,
    title: "Information and Communication Technology Act 2006 Cyber Security",
    summary: "Governs ICT usage, electronic transactions, cyber infrastructure, and technology-related legal matters",
    documentType: "Technology Law",
    date: "2006-10-08",
    jurisdiction: "Bangladesh",
  },
  {
    id: 7,
    title: "Intellectual Property Rights Act 2000",
    summary: "Protects patents, trademarks, copyrights, and trade secrets under Bangladesh law",
    documentType: "IP Law",
    date: "2000-08-22",
    jurisdiction: "Bangladesh",
  },
  {
    id: 8,
    title: "Intellectual Copyright Act 2000",
    summary: "Safeguards intellectual property rights for creative works, literary content, and artistic expressions",
    documentType: "Copyright Law",
    date: "2000-08-22",
    jurisdiction: "Bangladesh",
  },
  {
    id: 9,
    title: "Intellectual Patent and Design Act 1911",
    summary: "Protects inventions, industrial designs, and innovative intellectual property through patent registration",
    documentType: "Patent Law",
    date: "1911-03-18",
    jurisdiction: "Bangladesh",
  }
];

function searchDocuments(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();

  const results = legalDocuments.filter(doc => {
    const titleLower = doc.title.toLowerCase();
    return titleLower.includes(searchTerm);
  });

  return results;
}

app.post('/api/search', (req, res) => {
  const { query } = req.body;
  
  setTimeout(() => {
    const results = searchDocuments(query);
    
    res.json({
      success: true,
      results: results,
      count: results.length,
      query: query
    });
  }, 800);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});