const express = require("express");
const app = express();

app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// POST /bfhl Route
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    // Details
    const fullName = "akanksha_panda";  
    const dob = "05082004";          
    const email = "akankshapanda2022@vitbhopal.ac.in"; 
    const rollNumber = "22BCE10497";   

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;

    data.forEach(item => {
      const str = String(item);
      if (/^-?\d+$/.test(str)) {
        const num = parseInt(str, 10);
        if (num % 2 === 0) {
          even_numbers.push(str);
        } else {
          odd_numbers.push(str);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(str)) {
        alphabets.push(str.toUpperCase());
      } else {
        special_characters.push(str);
      }
    });

    // Concatenation of string
    const allChars = data.filter(x => /^[a-zA-Z]+$/.test(String(x))).join("");
    const reversed = allChars.split("").reverse();
    let concat_string = "";
    reversed.forEach((ch, idx) => {
      concat_string += idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
    });

    res.status(200).json({
      is_success: true,
      user_id: `${fullName}_${dob}`,
      email,
      roll_number: rollNumber,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });

  } catch (err) {
    res.status(500).json({ is_success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
