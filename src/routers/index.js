const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('Hello World');
});

module.exports = router;