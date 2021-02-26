import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello World!");
});

app.post("/", (req, res) => {
    return res.send("Ok");
});

app.listen(8080, () => console.log("Server is running!"));