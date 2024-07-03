const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile("index.html");
})

app.get('/mother-and-me', (req, res) => {
    res.download("apps/mother-and-me.apk");
})

app.get('/tcecodersclub', (req, res) => {
    res.download("apps/tcecodersclub.apk");
})

app.get('/food-court', (req, res) => {
    res.download("apps/food-court.apk");
})

app.listen(3000, () => {
    console.log("Server started in PORT 3000");
})