const express = require('express');
const { validationResult } = require('express-validator');
const { addApplicationValidation } = require('../../../validators/volunteer');

const router = express.Router();
const volunteer_controller = require('../../../controllers/api/volunteer');

// Define API routes
router.get('/', (req, res)=>{
    volunteer_controller.getAll(req, res);
});

router.post('/', addApplicationValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    volunteer_controller.create(req, res)
})

module.exports = router;


