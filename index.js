const express = require('express');
const http = require("node:http");
const app = express();
const port = 3000;

const host = `http://localhost:${port}`

app.use(express.json());

let produits = [
    {id: 1, nom: "Thé Vert Matcha", prix: 12.99, quantite: 10 },
    {id: 2, nom: "Thé Vert marron", prix: 7.99, quantite: 5 }
]

app.get('/produits', (req,res) => {
    res.status(200).json(produits)
})

app.get('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const produit = produits.find(parking => parking.id === id)
    res.status(200).json(produit)
})

app.post('/post', (req,res) => {
    produits.push(req.body)
    res.status(201).json(produits)
})

app.put('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(p => p.id === id);
    produit.nom = req.body.nom;
    produit.prix = req.body.prix;
    produit.quantite = req.body.quantite;
    res.status(200).json(produit)
})

app.delete('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(p => p.id === id);
    produits.slice(produits.indexOf(produit), 1)
    res.status(200).json(produit)
})

app.listen(port, () => {
    console.log(`Server démarré sur: ${host}`)
})