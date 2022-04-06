import Express from 'express'

const app = Express()

app.get('/', (req : Express.Request, res : Express.Response) => {
  res.send ('test')
})

app.listen(3001, () => {
  console.log('Running port 3001')
})