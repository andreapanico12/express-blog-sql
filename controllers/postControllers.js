
const connection = require(`../data/dbPosts`)


const index = (req,res) =>{
  

  res.send(`Visualizzo la lista dei post`)
}

const show = (req,res) =>{
  const id =req.params.id;
  res.send(`Mostro il post con id ${id}`)
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
  res.send(`Elimino il post con id ${id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}