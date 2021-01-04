const express = require("express")
const route = express.Router()
const jwt = require("jsonwebtoken")
const conn = require("../database/db.js")
var mysql = require('mysql');
const bcrypt = require("bcrypt")
const bodyParser = require('body-parser')
const cors = require("cors")
const saltRounds = 10;

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: false }));
route.use(cors())
route.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

route.post('/sign_up', async (req, res) => {
    try {
        console.log(req.body)
        const mdp = req.body.mdp;
        // const confirme_mdp = req.body.mdp;
        const encryptedmdp = await bcrypt.hash(mdp, saltRounds);
        // const encryptedmdp2 = await bcrypt.hash(confirme_mdp, saltRounds);
        var sql = `INSERT INTO utilisateur (prenom, email, mdp, photo_profil) VALUES ('${req.body.prenom}', '${req.body.email}', '${encryptedmdp}', '${req.body.photo_profil}')`;
        conn.query(sql, function (err) {
            if (err) throw err
            console.log("1 ligne insérée");
            res.send("ok")
        });
    } catch (error) {
        console.log(error);
    }
})

route.post("/sign_in", function (req, res) {
    var email = req.body.email;
    var mdp = req.body.mdp;

    conn.query('SELECT * FROM utilisateur WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                const comparision = await bcrypt.compare(mdp, results[0].mdp)
                // bcrypt.compare(mdp, results[0].mdp, (err, result) => {
                                var decoded= jwt.decode(token);
                // })

                if (comparision) {
                    var token = jwt.sign({ id: results[0].id_utilisateur, email: results[0].email }, 'shhhhh');
                    res.status(200).send({
                        "code": 200,
                        "success": "login sucessfull",
                        token: token
                    })
                }
                else {
                    console.log('err')
                    res.status(206).send({
                        "code": 206,
                        "success": "Email and mdp does not match",
                        token: null
                    });
                }
            }
            else {
                res.status(206).send({
                    "code": 206,
                    "success": "Email does not exist",
                    token: null
                });
            }
        }
    });

});


route.get("/utilisateurs", function (req, res) {
    try{
    var sql= `SELECT * FROM utilisateur`;
    conn.query(sql, function (err, results){
        if (err) throw err;
        res.status(200).send(results);
    });
}catch (error){
    console.log(error);
}
});

route.delete("/utilisateurs/:id", function (req, res) {
    try{
    var sql= `DELETE FROM utilisateur WHERE id_utilisateur = 8`;
    
    conn.query(sql, function (err, results){
        if (err) throw err;
        res.status(200).send(results);
    });
}catch (error){
    console.log(error);
}
});

route.post("/new_recette", function (req, res) {
    try {
        console.log(req.body)
        var nom_recette = req.body.nom_recette;
        var auteur = req.body.auteur;
        var photo = req.body.photo;
        var description = req.body.description;
        var TO_DATE = req.body.date_publication;
        var id_utilisateur = req.body.id_utilisateur;
        var sql = `INSERT INTO recettes (nom_recette, auteur, photo, description, date_publication, id_utilisateur) VALUES ('${nom_recette}', '${auteur}', '${photo}', '${description}', '${TO_DATE}', '${id_utilisateur}')`;
        conn.query(sql, function (err, results) {
            console.log("1 ligne insérée");

            if (err) throw err;
      res.status(200).send(results);
            
        });
    } catch (error) {
        console.log(error);
    }

});

route.get("/recettes", function (req, res) {
    try{
    var sql= `SELECT * FROM recettes`;
    conn.query(sql, function (err, results){
        if (err) throw err;
        res.status(200).send(results);
    });
}catch (error){
    console.log(error);
}
});

console.log("route connected");

module.exports = route