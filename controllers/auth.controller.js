import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password)
      return res.status(400).json({
        success: false,
        error: 'Please provide username and password',
      })

    const token = generateToken({ username })
    return res.status(200).json({
      success: true,
      data: { token, user: { username } },
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    })
  }
}

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '90d',
  })
}
