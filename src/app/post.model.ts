export interface Post {
    id: number;
    username: string;
    image: string;
    caption: string;
    likes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    username: string;
    text: string;
  }
  