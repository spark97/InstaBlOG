export class Blog{
    
    constructor(title: String, img: String, description: String, author: String){
        this.title = title;
        this.img = img;
        this.description = description;
        this.author = author;
    }

    private title: String;
    private img: String;
    private description: String;
    private author: String;
}