import express from 'express';
const app = express()
const port = 4000

app.get('/', (req: any, res: any) => {
  console.log(req);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})