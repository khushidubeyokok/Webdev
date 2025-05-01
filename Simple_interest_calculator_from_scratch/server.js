const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
app.use(cors()); // Enable CORS for all routes

app.get('/simpleInterest', function(req, res) {
    const p = parseFloat(req.query.p) || 0;
    const t = parseFloat(req.query.t) || 0;
    const r = parseFloat(req.query.r) || 0;
    const interest = (p * t * r) / 100;
    const final = p + interest;
    res.json({ "Interest": interest, "Total": final });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
