import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
    try {
        const userAccount = await this.account.create({
            userId: ID.unique(),
            email,
            password,
            name
    });

        if (userAccount) {
            return this.login({ email, password });
        } else {
            return userAccount;
        }
    } catch (error) {
        throw error;
    }
}
    
    async login({ email, password }) {
        try {
            const session = await this.account.createSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
           
            const user = await this.account.get();
            return user;
        } catch (error) {
           
            if (error.code === 401) {
                console.warn("No active session. User not logged in.");
            } else {
                console.error("Appwrite service :: getCurrentUser :: error", error);
            }
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
