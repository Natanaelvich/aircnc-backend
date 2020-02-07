import User from '../models/User'

export default {
  async index(req, res) {
    const users = await User.find()

    res.json(users)
  },
  async store(req, res) {
    const { email } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.json(userExists)
    }

    const user = await User.create({
      email,
    })

    return res.json(user)
  },
}
