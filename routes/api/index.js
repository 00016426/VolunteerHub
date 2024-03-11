const express = require('express')
const volunteer_router = require('./volunteer')

const router = express.Router()

// registering child routers
router.use('/volunteer', volunteer_router)
module.exports = router

