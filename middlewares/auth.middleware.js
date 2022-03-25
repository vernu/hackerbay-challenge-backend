import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (e) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
    })
  }
}
