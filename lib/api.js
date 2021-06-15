import { join } from 'path'
import fs from 'fs'

const postDirectory = join(process.cwd(),'pages/_posts')

export function getAllFiles(){
    return fs.readdirSync(postDirectory)
}

export function getAllSlugs(){
    //function to get all posts with metadata
    files = getAllFiles()
    slugs = files.map((file) => file.replace(/\.mdx?$/, ''))
    return slugs
}


export function getPostBySlug( { params } ){
    

}