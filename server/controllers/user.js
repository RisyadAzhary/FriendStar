const { User, Tweet } = require("../models")
const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const {OAuth2Client} = require('google-auth-library');



class UserController {
	static async register(req, res, next) {
		const { first_name, last_name, username, email, password } = req.body

		try {
			const payload = {
				first_name, last_name, username, email, password
			}
			const newUser = await User.create(payload)
			res.status(201).json(newUser)
		} catch (err) {
			next(err)
		}
	}

	static async login(req, res, next) {
		const { username, password } = req.body
		try {
			const payload = {
				username, password
			}

			const user = await User.findOne({
				where: { username }
			})

			if(!user) {
				throw { msg: 'wrong email/password', status: 401 }
			} else if (!comparePassword(payload.password, user.password)) {
				throw { msg: 'wrong email/password', status: 401 }
			} else {
				const access_token = signToken(user.id)
				res.status(200).json({ access_token })
			}

		} catch (err) {
			next(err)
		}
	}


	static googleLogin(req, res, next) {
		
		let { google_access_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID);

        let email;
        client.verifyIdToken({
            idToken: google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            email = payload.email
            return User.findOne({
                where: {
                    email
                }
            })
        })
        .then(result => {
            if (result) {
                return result
            } else {
                let objData = {
					first_name: "nama depan",
					last_name: "nama belakan",
					username: "nama depan",
					email: email,
                    password: "loginGoogle"
                }
                return User.create(objData)
            }
        })
        .then(dataUser => {
			console.log(dataUser);
            let access_token = signToken({id: dataUser.id, email: dataUser.email})
            res.status(200).json({access_token})
        })
        .catch(err => {
            console.log(err);
        })
    }

}

module.exports = UserController