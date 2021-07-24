import express from "express";
import { autocomplete, search } from "../controller/search";

let router = express.Router();

router.get("/autocomplete", (req, res, next) => {
  let query: string = req.query.q as string;
  if (query === undefined) {
    res.sendStatus(400);
    return;
  }

  autocomplete(query)
    .then((results) => {
      res.send(results);
      next();
    })
    .catch(next);
});

router.get("/search", (req, res, next) => {
  let query: string = req.query.q as string;
  if (query === undefined) {
    res.sendStatus(400);
    return;
  }

  search(query)
    .then((result) => {
      res.send(result);
      next();
    })
    .catch(next);
});

module.exports = router;
