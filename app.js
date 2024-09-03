const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  app.use((req, res) => {
    res.json({
      "iban":[
        {
            "IBAN": "GB33BUKB20201555555555",
            "Valide": true,
            "Raison": "IBAN valide, longueur, contrôle, code banque, compte et structures"
        },
        {
            "IBAN": "GB94BARC10201530093459",
            "Valide": true,
            "Raison": "IBAN valide, code banque non trouvé (la banque n'a pas pu être identifiée): longueur valide, contrôle, code banque, compte et structure"
        },
        {
            "IBAN": "GB94BARC20201530093459",
            "Valide": false,
            "Raison": "IBAN invalide, vérifier les chiffres MOD-97-10 comme pour ISO/IEC 7064:2003"
        },
        {
            "IBAN": "GB96BARC202015300934591",
            "Valide": false,
            "Raison": "IBAN invalide, la longueur doit être de 'X' caractères de longueur!"
        },
        {
            "IBAN": "GB02BARC20201530093451",
            "Valide": false,
            "Raison": "Numéro de compte invalide"
        },
        {
            "IBAN": "GB68CITI18500483515538",
            "Valide": false,
            "Raison": "Numéro de compte invalide"
        },
        {
            "IBAN": "GB24BARC20201630093459",
            "Valide": false,
            "Raison": "Code banque non trouvé et compte invalide"
        },
        {
            "IBAN": "GB12BARC20201530093A59",
            "Valide": false,
            "Raison": "Structure de compte invalide"
        },
        {
            "IBAN": "GB78BARCO0201530093459",
            "Valide": false,
            "Raison": "Code Banque non trouvé et structure de code banque invalide"
        },
        {
            "IBAN": "GB2LABBY09012857201707",
            "Valide": false,
            "Raison": "IBAN invalide et structure de contrôle"
        },
        {
            "IBAN": "GB01BARC20714583608387",
            "Valide": false,
            "Raison": "Contrôle d'IBAN invalide"
        },
        {
            "IBAN": "GB00HLFX11016111455365",
            "Valide": false,
            "Raison": "Contrôle d'IBAN invalide"
        },
        {
            "IBAN": "US64SVBKUS6S3300958879",
            "Valide": false,
            "Raison": "Le pays ne semble pas accepter l'IBAN!"
        }
    ]    
    }); 
 });

module.exports = app;