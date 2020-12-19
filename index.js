const express = require('express')
const app = express()
const cors = require('cors')
const users = [{ "id" : "User", "password": "password" }]

app.use(express.json())
app.use(cors())

app.post('/login', (req, res) => {
    const user = users.find(user => (user.id === req.body.id) && (user.password === req.body.password))
	if (user == undefined) {
		res.status(400).send({"id" : "Invalid"})
	} else {
        res.status(200).send(user)
    }
})

app.listen(4000, () => {
	console.log('API is now online on port 4000')
})
