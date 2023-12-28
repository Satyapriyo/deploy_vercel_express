const express = require('express');
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("I am from Home");
})

app.get("/about", (req, res) => {
    res.send("I am from About");
})

module.exports = app