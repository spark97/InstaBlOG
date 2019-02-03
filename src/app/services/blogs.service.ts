import {Blog} from '../models/blog.model'
export class BlogsService{
    private blogs = [
        new Blog("Blog Post 1", 
        "https://ununsplash.imgix.net/photo-1414788020357-3690cfdab669?q=75&fm=jpg&s=da7d3842604f06bf5c6ded7f4fe7aeed", 
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        "Harshit Shah"),
        new Blog("Blog Post 2", 
        "https://ununsplash.imgix.net/photo-1414788020357-3690cfdab669?q=75&fm=jpg&s=da7d3842604f06bf5c6ded7f4fe7aeed", 
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        "Harshit Shah")
    ];

    getBlogs(){
        return this.blogs;
    }

    getBlog(index : number){
        return this.blogs[index];
    }
}