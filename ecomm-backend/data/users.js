import bcrypt from 'bcryptjs'

// Pre-hashed password "123456" for all seed users
const johnId  = '000000000000000000000001'
const janeId  = '000000000000000000000002'
const adminId = '000000000000000000000003'

const users = [
    {
        _id: adminId,
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        _id: johnId,
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        _id: janeId,
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
export { johnId, janeId, adminId }