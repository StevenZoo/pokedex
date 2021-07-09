import express from "express";
import { autocomplete, search } from "../controller/search";

let router = express.Router();

router.get("/autocomplete", (req, res) => {
  let query: string = req.query.q as string;
  if (query === undefined) {
    res.sendStatus(400);
    return;
  }

  let results = autocomplete(query);
  res.send(results);
});

router.get("/search", (req, res) => {
  let query: string = req.query.q as string;
  if (query === undefined) {
    res.sendStatus(400);
    return;
  }

  let result = search(query);
  res.send(result);
});

module.exports = router;
