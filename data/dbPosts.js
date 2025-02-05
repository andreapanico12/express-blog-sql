const mysql = require(`mysql2`);

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: `root`,
  password: `nuova_password`,
  database: `posts_blog_db`
})

connection.connect((err) => {
  if(err) throw err;
  console.log(`Connesso a MYSQL!`)
});

module.exports = connection;