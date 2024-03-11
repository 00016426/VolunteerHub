const express = require('express');

const router = express.Router();
const volunteer_controller = require('../../../controllers/api/volunteer');

// Define API routes
router.get('/', (req, res)=>{
    volunteer_controller.getAll(req, res);
});

module.exports = router;

