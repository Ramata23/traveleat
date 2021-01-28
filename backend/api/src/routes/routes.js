const express = require("express")
const route = express.Router()
const jwt = require("jsonwebtoken")
const conn = require("../database/db.js")
var mysql = require('mysql');
const bcrypt = require("bcrypt")
const bodyParser = require('body-parser')
const cors = require("cors")
const saltRounds = 10;
const secret = require("../config").secret

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: false }));
route.use(cors())
route.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

route.post('/sign_up', (req, res) => {
    try {
        console.log(req.body)
        // let mdp = req.body.mdp;
        // const confirme_mdp = req.body.mdp;
        bcrypt.hash(req.body.mdp, saltRounds, (err, hash) => {
            let newUser = {
                prenom: req.body.prenom,
                email: req.body.email,
                mdp: hash,
                photo_profil: req.body.photo_profil
            }

            // const encryptedmdp2 = await bcrypt.hash(confirme_mdp, saltRounds);
            conn.query(`INSERT INTO utilisateur SET ?`, newUser, (err, result) => {
                console.log(err)
                if (err == null) {
                    res.status(200)
                    res.json("Ok")
                    console.log("1 ligne insérée");
                } else {
                    res.status(401)
                    res.json("Erreur")
                    console.log("erreur")
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
})

route.post("/sign_in", function (req, res) {
    var email = {email: req.body.email};
    conn.query('SELECT * FROM utilisateur WHERE ?', email, function (error, results, fields) {
            if (error == null) {
                bcrypt.compare(req.body.mdp, results[0].mdp, (err, result) => {
                    var token = jwt.sign({ id: results[0].id_utilisateur, email: results[0].email }, secret, { expiresIn: 86400});
                    if (err == null) {
                        res.status(200).send({ auth: true, token: token })
                    } else {
                        console.log('err')
                        res.status(206).send({
                            "code": 206,
                            "success": "Email and mdp does not match",
                            token: null
                        });
                    }
                })
                // bcrypt.compare(mdp, results[0].mdp, (err, result) => {
                                // var decoded= jwt.decode(token);
                // })

                
            }
            else {
                res.status(206).send({
                    "code": 206,
                    "success": "Email does not exist",
                    token: null
                });
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
        nom_recette = nom_recette.replace(/'/g, ' ')
        nom_recette = nom_recette.replace(/`/g, ' ')
        var auteur = req.body.auteur;
        var photo = req.body.photo;
        var description = req.body.description;
        description = description.replace(/'/g, ' ')
        description = description.replace(/`/g, ' ')
        var TO_DATE = req.body.date_publication;
        var id_utilisateur = req.body.id_utilisateur;
        var sql = `INSERT INTO recettes (nom_recette, auteur, photo, description, date_publication, id_utilisateur) 
        VALUES ('${nom_recette}', '${auteur}', '${photo}', '${description}', '${TO_DATE}', '${id_utilisateur}')`;
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