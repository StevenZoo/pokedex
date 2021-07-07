import express from "express";
import NamesSearchService from "../services/names";

let router = express.Router();
let autocompleteService = new NamesSearchService();

router.get("/autocomplete", (req, res) => {
  console.log(req.query);
  let query: string = req.query.q as string;
  let results = autocompleteService.findMatchingNames(query);
  res.send({ result: results });
});

router.get("/search", (req, res) => {
  console.log(req.query);
  res.send({ result: "search" });
});

module.exports = router;
