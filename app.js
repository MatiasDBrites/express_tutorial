const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (request, response) => {
  response.send({ message:'Hello World' })
})

app.post("/sum", (request, response) => {
  const { number1, number2 } = request.body
  const result = number1 + number2;
  response.send({message: result})
})

app.post('/subtraction', (request, response) => {
  const { number1, number2 } = request.body
  const result = number1 - number2;
  response.send({message: result})
})

app.post('/multiply', (request, response) => {
  const { number1, number2 } = request.body
  const result = number1 * number2;
  response.send({message: result})
})

app.post('/division', (request, response) => {
  const { number1, number2 } = request.body
  const result = number1 / number2;
  response.send({message: result})
})

app.listen(3001, () => {
  console.log('Server running on localhost:3001...')
})