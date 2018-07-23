const spicedPg = require("spiced-pg");
var config = require('../config.json');
var amazon = config.s3Url ;
var dbUrl ;


if (process.env.DATABASE_URL) {
    db = process.env.DATABASE_URL
} else {
    var info = require('../secrets.json')
    var user = info.username;
    var pass = info.password;
    db = spicedPg(`postgres:${user}:${pass}psql@localhost:5432/shop`);
}





exports.getShopProducts = function() {

    const  q = `SELECT * FROM shopItems`
        return db.query( q )
            .then(( data ) => { return data.rows })
}


exports.getIndividualProduct = function(id) {
    const  q = `SELECT * FROM shopItems WHERE id = $1`
    const params = [ id ]
    // console.log('db.js getIndividualProduct function', id);
        return db.query( q, params )
            .then(( data ) => { return data.rows })
            .catch(err => console.log('inside err of getIndividualProduct', err))
}
