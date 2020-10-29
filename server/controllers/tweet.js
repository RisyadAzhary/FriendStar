const { User, Tweet } = require("../models")

class TweetController {
	static async create(req, res, next) {
		const { content } = req.body
		const UserId = req.loggedIn

		try {
			const payload = {
				content, UserId
			}

			const newTweet = await Tweet.create(payload)
			res.status(200).json(newTweet)
		} catch (err) {
			next(err)
		}
	}

	static async showAll(req, res, next) {
		const UserId = req.loggedIn

		try {
			const tweets = await Tweet.findAll({where: { UserId }, order: [['createdAt', 'ASC']]})
			res.status(200).json(tweets)
		} catch (err) {
			next(err)
		}
	}

	static async edit(req, res, next) {
		const { content } = req.body
		const id = req.params.id

		try {
			const payload = {
				content
			}

			const editedTweet = await Tweet.update(payload, { where: { id }, returning: true })
			res.status(200).json(editedTweet[1])
		} catch (err) {
			next(err)
		}
	}

	static async delete(req, res, next) {
		const id = req.params.id

		try {
			
			const deletedTweet = await Tweet.destroy({ where: { id } })
			res.status(200).json({ message: 'Delete Success' })
		} catch (err) {
			next(err)
		}
	}
}

module.exports = TweetController