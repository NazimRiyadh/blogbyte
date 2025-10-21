import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    Databases
    bucket
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }){

        try{
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.error("Error creating post:", error) 
        }
    }
    
    async updatePost(slug,{title, content, featuredImage, status}){
        try{
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            console.error("Error updating post:", error)
        }
    }

    async deletePost(slug){
        try{
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        }catch(error){
            console.error("Error deleting post:", error)
            return false
        }
    }

    async getPost(){
        try{
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.error("Error getting post:", error) 
        }
    }

    async getPost(queries=[Query.equal('status','active')]){
        try{
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }catch(error){
            console.error("Error getting posts:", error) 
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        }catch(error){
            console.error("Error uploading file:", error)
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true
        }catch(error){
            console.error("Error deleting file:", error)
        }
    }

    getFilePreview(fileId){
        try{
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )
        }catch(error){
            console.error("Error getting file preview:", error)
        }
    }
}


const service= new Service()

service.client = new Client()

