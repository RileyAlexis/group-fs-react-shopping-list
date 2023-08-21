const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "shoppinglist"
                ORDER BY "item" ASC`;
    pool.query(queryString)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error making query ${queryString}`, error);
    })

});

router.post('/', (req, res) => {
    let queryString = `INSERT INTO "shoppinglist" ("item", "quantity", "unit", "complete")
                        VALUES ($1, $2, $3, $4)`
        
        pool.query(queryString, [req.body.item, req.body.quantity, req.body.unit, req.body.complete])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

router.put('/complete/:id', (req, res) => {
    let queryString = `UPDATE "shoppinglist"
                SET "complete" = NOT "complete"
                WHERE "id" = $1`;
    let id = req.params.id;
    pool.query(queryString, [id])
    .then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error making query ${queryString}`, error)
    })
});


router.delete('/:id', (req, res) => {
    let queryString = `DELETE FROM "shoppinglist"
                    WHERE "id" = $1`
    let id = req.params.id;
        pool.query(queryString, [id])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making query ${queryString}`, error);
            res.sendStatus(500);
        })
})




module.exports = router;