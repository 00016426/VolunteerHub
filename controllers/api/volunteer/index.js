// import specific service class
const volunteer_service = require('../../../services/volunteer/')

// mention the service's needed actions (methods)
const volunteer_controller = {
    getAll(req, res) {
        res.json(volunteer_service.getAll())
    }
}

module.exports = volunteer_controller
