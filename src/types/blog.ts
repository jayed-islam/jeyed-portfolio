export interface IBlog {
  _id: string;
  title: string;
  content: string;
  description: string;
  banner: string;
  author: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  isDeleted: boolean;
}
