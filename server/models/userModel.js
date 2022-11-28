const { Pool } = require('pg');

const PG_URI = 'postgres://mbtudqaw:OXbx4Kk6x_732ybG8V1p_M2EtNqnR6S-@peanut.db.elephantsql.com/mbtudqaw';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query: ', text);
    return pool.query(text, params, callback);
  }
};
