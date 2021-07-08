import express from "express";
import {autoComplete, search} from "../controller/search"

let router = express.Router();

router.get("/autocomplete", (req, res) => {
  console.log(req.query);
  let query: string = req.query.q as string;
  let results = autoComplete(query);
  res.send({ result: results });
});

router.get("/search", (req, res) => {
  console.log(req.query);
  let query: string = req.query.q as string;
  let results = search(query);
  res.send({ result: results });
});

module.exports = router;
