// import specific service class
const volunteer_service = require('../../../services/volunteer')

// mention the service's needed actions (methods)
const volunteer_controller = {
    getAll(req, res) {
        res.json(volunteer_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            volunteer_service.create(req, res)
        )
    }
}

module.exports = volunteer_controller

