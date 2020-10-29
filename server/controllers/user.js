const { User, Tweet } = require("../models")
const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")

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
}

module.exports = UserController