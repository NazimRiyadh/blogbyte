import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

export default function PostCard({$id, title, featuredImage}) {
    const imageUrl = appwriteService.getFilePreview(featuredImage);
    console.log("=== IMAGE DEBUG ===");
    console.log("Featured Image ID:", featuredImage);
    console.log("Generated URL:", imageUrl);
    
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className='rounded-xl'
                    />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

