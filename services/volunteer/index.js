const fs = require('fs')
// access global mock db file
const volunteers = require(global.mock_db)

// write service method implementations
const volunteer_service = {
    getAll() {
        return volunteers
    }
}

module.exports = volunteer_service
