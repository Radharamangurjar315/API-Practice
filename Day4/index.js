const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Validate input
  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({
      is_success: false,
      user_id: "radharaman_gurjar_03012005",
      email: "radharamangurjar220522@acropolis.in",
      roll_number: "0827CI221110",
      numbers: [],
      alphabets: [],
    });
  }

  const numbers = [];
  const alphabets = [];

  data.forEach(element => {
    if (/^\d+$/.test(element)) {
      numbers.push(element);
    } else if (/^[a-zA-Z]+$/.test(element)) {
      alphabets.push(element);
    }
  });

  res.status(200).json({
    is_success: true,
    user_id: "radharaman_gurjar_03012005",
    email: "radharamangurjar220522@acropolis.in",
    roll_number: "0827CI221110",
    numbers,
    alphabets,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
