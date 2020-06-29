module.exports = (req, res) => {
  res.json({
    body: {
      a: req.body
    },
    query: req.query,
    cookies: req.cookies,
    name: 'John', 
    email: 'john@example.com'
  })
}