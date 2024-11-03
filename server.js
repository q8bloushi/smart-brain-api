const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
	client: 'pg',
	connection: {
		host: 'csjnrthu0jms73b3l570-a.oregon-postgres.render.com',
		user: 'smart_brain_api_vitz_user',
		password: 'gsF0Kj2h395EfkrHYSoHaHuP3P4P3mm1',
		database: 'smart_brain_api_vitz',
		port: '5432'
	}
});

const app = express();
app.use(bodyParser.json());
app.use(cors())


app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => {image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res, db)})

app.listen(5432, () => {
	console.log('app is running on port 5432');
})
