const fs = require('fs')

// access global mock db file
const volunteers = require(global.mock_db)

// write service method implementations
const volunteer_service = {
    getAll() {
        return volunteers
    },
    create(req, res) {
        let new_id = genRandId(4)
                
        const volunteer = req.body

        const new_volunteer = {
            id: new_id,
            volunteer: volunteer
        }

        volunteers.push(new_volunteer)
        
        writeToFile(volunteers)
        
        return new_volunteer
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = volunteer_service
