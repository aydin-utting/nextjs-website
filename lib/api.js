import {join} from 'path'
const readFileSync =  require('fs').readFileSync;

import matter from 'gray-matter'
const postDirectory = join(process.cwd(),'pages/_posts')
import fs from 'fs'
export function getAllFiles(){
    return fs.readdirSync(postDirectory)
}

export function getAllSlugs(){
    //function to get all posts with metadata
    const files = getAllFiles()

    return files.map(fileName => {
        return {
          params: {
            slug: fileName.replace(/\.mdx?$/, '')
          }
        }
      })
}


export function getPostBySlug(slug){
    // accepts slug
    // returns the post data.
    const fullPath = join(postDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents)
	  

    return {
      slug,
      content,
      data
    }
}
