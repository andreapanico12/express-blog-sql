const express = require(`express`);
const app = express();
const port = 3000;

const errorHandler = require(`./middlewares/errorHandler`)
const notFoundHandler = require(`./middlewares/notFoundHandler`)


const postRouter = require(`./router/postsRouter`)

app.use(express.static(`public`));

app.use(express.json());

app.get(`/`, (req,res) =>{
  res.send(`Server post`);
})

app.use(`/posts`,postRouter)


app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port,() => {
  console.log(`In ascolto alla porta ${port}`);
})

