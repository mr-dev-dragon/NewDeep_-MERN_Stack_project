const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send(" hna jage l asasiya ");
});
app.get("/admin", (req, res) => {
    res.send(" admin ana how ahmed  ");
});
app.listen(3000, () => console.log('Server started on port 3000'));
