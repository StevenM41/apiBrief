const express = require('express');
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
});

app.post('/produits', (req,res) => {
    produits.push(req.body)
    res.status(201).json(produits)
})

app.put('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(p => p.id === id);
    produit.nom = req.body.nom;
    produit.prix = req.body.prix;
    produit.quantite = req.body.quantite;
    res.status(200).json(produits)
})

app.delete('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(p => p.id === id);
    produits.splice(produits.indexOf(produit), 1)
    res.status(200).json(produits)
})

app.listen(port, () => {
    console.log(`Server démarré sur: ${host}`)
})