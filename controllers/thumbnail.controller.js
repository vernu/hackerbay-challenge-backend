import Jimp from 'jimp'

const TEMP_IMG_PATH = 'storage/img-50x50.jpg'

export const thumbnail = async (req, res) => {
  try {
    const { imageUrl } = req.body

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        error: 'Please provide imageUrl',
      })
    }
    await resizeImage(imageUrl)
    return res.json({
      resized: `${req.protocol}://${req.headers.host}/${TEMP_IMG_PATH}`,
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    })
  }
}

const resizeImage = async (url) => {
  const jimpImg = await Jimp.read(url)
  try {
    return jimpImg.resize(50, 50).write(TEMP_IMG_PATH)
  } catch (e) {
    throw new Error(e)
  }
}
