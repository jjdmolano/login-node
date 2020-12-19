const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
// fake/dummy user database
const users = [{ id: 'User', password: 'password' }]

app.use(express.json())
app.use(cors())

// post request for login
app.post('/login', (req, res) => {
	function userLogin() {
		return new Promise((resolve, reject) => {
			const user = users.find(
				user => user.id === req.body.id && user.password === req.body.password
			)
			if (user !== undefined) {
				resolve(res.status(200).send(user))
			} else {
				reject(res.status(400).send(false))
			}
		})
	}

	userLogin()
		.then(success => {
			success
		})
		.catch(error => {
			error
		})
})

app.listen(port, () => {
	console.log(`API is now online on port ${port}`)
})
