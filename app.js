
const express = require('express')
const cors = require('cors');

const app = express()
const port = 5000


app.use(cors())

app.get('/api', (req, res) => {
    res.status(200).send({ status: "OK", message: "API is running successfully changed!" })
})

app.listen(port, () => {
    console.log(`Node App listening on port ${port}`)
})