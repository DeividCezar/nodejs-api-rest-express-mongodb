import express from "express"

const app = express();
const livros = [
    {id:1, "titulo":"Interstellar"},
    {id:2, "titulo":"Minions 2"}
]

app.get("/", (req, res) => {
    res.status(200).send("Sucesso na requisiçao");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

export default app;