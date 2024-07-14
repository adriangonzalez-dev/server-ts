import { SQLServerConnection } from '../config/db.config'
import { logger } from '../helper/logger'
import { User } from '../Models/User.model'

const users:Array<User> = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 4,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 5,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 6,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 7,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 8,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 9,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 10,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 11,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 12,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 13,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 14,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 15,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 16,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 17,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 18,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 19,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 20,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 21,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 22,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 23,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 24,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 25,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 26,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 27,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },

    {
        id: 28,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 29,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 30,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 31,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    },
    {
        id: 32,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 33,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 34,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    },
    {
        id: 35,
        name: 'Alice Williams',
        age: 40,
        email: 'alice.williams@example.com'
    }
]


export class UserService {
    private readonly dbContext: SQLServerConnection
    constructor(dbContext: SQLServerConnection){
        this.dbContext = dbContext
    }
    async getUsers():Promise<User[]> {
        try {
            //await this.dbContext.openConnection()
            const query = `SELECT * FROM users`
            // example query
            // const result = await this.dbContext.query(query)
            return users;
        } catch (error:any) {
            logger(error.message, 'ReportService', 'GetReport')
            return []
        } finally {
            // await this.dbContext.closeConnection()
        }
    }

    async getUserById(id:number):Promise<User | null> {
        try {
            //await this.dbContext.openConnection()
            const query = `SELECT * FROM users u WHERE u.id = ${id}`
            // example query
            // const result = await this.dbContext.query(query)
            const user = users.find(user=>user.id === id);
            return user || null
        } catch (error:any) {
            logger(error.message, 'ReportService', 'getUserById')
            return null
        } finally {
            //await this.dbContext.closeConnection()
        }
    }
}