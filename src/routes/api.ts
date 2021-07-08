import express from "express";
import {autocomplete, search} from "../controller/search"

let router = express.Router();

router.get("/autocomplete", (req, res) => {
  let query: string = req.query.q as string;
  let results = autocomplete(query);
  res.send({ result: results });
});

router.get("/search", (req, res) => {
  let query: string = req.query.q as string;
  let results = search(query);
  res.send({ result: results });
});

module.exports = router;
