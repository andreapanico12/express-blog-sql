
const connection = require(`../data/dbPosts`)


const index = (req,res) =>{
  const sql = `SELECT * FROM posts`

  connection.query(sql, (err,results) => {
    if(err) return res.status(500).json({error: `Database query failed`});
    res.json(results)
  })
}

const show = (req,res) =>{
  const id =req.params.id;
  const sql = `SELECT * FROM posts WHERE id = ?`;

  connection.query(sql,[id],(err,results)=>{
    if(err) return res.status(500).json({error:`Database query failed`})
    if(results.length === 0) return res.status(404).json({error: `post not found`})  
    res.json(results[0])
  })
}

const store =(req,res) => {
  res.send(`Creazione nuovo post`)
}

const update = (req,res) =>{
  const id = req.params.id;
  res.send(`Modifico il post con id ${id}`)
}

const modify = (req,res) =>{
  const id = req.params.id;
  res.send(`Modifico parzialmente il post con id ${id}`)
}

const destroy = (req,res) =>{
  const id = req.params.id;
  const sql = `DELETE FROM posts WHERE id = ?`;

  connection.query(sql,[id],(err)=>{
    if(err) return res.status(500).json({error:`Post elimination failed`})
    res.sendstatus(204)
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}