import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Express + Typescript server");
});

app.listen(8000, () => {
    console.log("server is running at https://localhost:8000");
});
