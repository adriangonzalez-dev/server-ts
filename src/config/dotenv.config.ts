import 'dotenv/config'

export class Config {
    static get(key:string){
        if(process.env[key]===undefined){
            throw new Error(`${key} is not defined`)
        }
        if(process.env[key]===null){
            return null
        }
        if(process.env[key]===''){
            return ''
        }
        if(process.env[key]==='true'){
            return true
        }
        if(process.env[key]==='false'){
            return false
        }
        if(!isNaN(Number(process.env[key]))){
            return Number(process.env[key])
        }
        return process.env[key]
    }
}
