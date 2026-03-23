// TypeScript type definitions

// Define a sample type for User
export interface User {
  id: number;
  name: string;
  email: string;
}

// Define a sample type for Post
export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

// Define a sample type for Comment
export interface Comment {
  id: number;
  postId: number;
  content: string;
  authorId: number;
}