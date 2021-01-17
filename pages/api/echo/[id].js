
//# request -> http://localhost:3000/api/echo/21 -> response -> 21
export default function getById(req, res) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(req.query.id);

  //SHORT VARIANT - For not write stsusCode, setHeader and res end

  res.json({
    yourid: req.query.id
  })
}