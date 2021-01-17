
//# this is like small contreoller
// export default function echo(req, res) {
//   //handle user requests
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "aplication/json");//❌❌ aplication -> application
// res.end(JSON.stringify({
//   message: req.query.message ?? "Base message"
// }))
// }

//# 
export default (req, res) => {
  console.log('req.query', req.query);
  res.statusCode = 200
  // res.json({ message: req.query.message ?? "Base message" })
  //http://localhost:3000/api/echo?message=hello -> {"message": "hello"}
  //http://localhost:3000/api/echo -> "Base message"
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({
    message: req.query.message ?? "Base message"
  }))
}
