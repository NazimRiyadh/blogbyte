import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    //account creation
    async createAccount({email, password, name}) {
        try{
           const userAccount= await this.account.create(ID.unique(), email, password, name)
           if(userAccount){
            return this.login({email, password})//log in direct if userAccount Available
           }
           else{
            return userAccount
           }
        }catch(error){
            console.error("Error creating account:", error) 
        }
    }

    //user login
    async login({email, password}){
        try{
            return await this.account.createSession(email, password)
        }catch(error){
            console.error("Error logging in:", error)   
        }
    }

    //get current logged in user
    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.error("Error getting current user:", error)   
        }
    return null
    }

    //user logout
    async logout(){
        try{
            return await this.account.deleteSessions('current')
        }catch(error){
            console.error("Error logging out:", error)   
        }
    return null
    }
}   

const authService = new AuthService()

export default authService