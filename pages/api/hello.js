// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//# http://localhost:3000/api/hello
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
