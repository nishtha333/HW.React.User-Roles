const db = require('../db');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/departments', (req, res, next) => {
    db.getDepartments()
      .then((depts) => res.send(depts))
      .catch(next);
});

router.get('/departments/:id', (req, res, next) => {
    db.getDepartmentById(req.params.id)
      .then((dept) => res.send(dept))
      .catch(next);
});