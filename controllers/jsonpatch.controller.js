import jsonpatch from 'jsonpatch'

export const jsonPatch = async (req, res) => {
  try {
    const { doc, patch } = req.body

    if (!doc || !patch)
      return res.status(400).json({
        success: false,
        error: 'Please provide doc and patch',
      })

    const patched = jsonpatch.apply_patch(doc, patch)

    return res.status(200).json({
      success: true,
      data: { original: doc, patched },
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    })
  }
}
