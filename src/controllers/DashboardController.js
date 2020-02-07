import Spot from '../models/Spot'

export default {
  async show(req, res) {
    const { user_id } = req.headers

    const spots = await Spot.find({ user: user_id })

    res.json(spots)
  },
}
