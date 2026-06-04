export type StoryCategory =
  | "Future Spouse Dreams"
  | "Soulmate Recognition"
  | "Past-Life Connection"
  | "Arranged Marriage"
  | "Love Marriage"
  | "Twin Flame Experience"
  | "Karmic Relationship"
  | "Spiritual Signs"
  | "Synchronicities"
  | "Destiny Stories";

export type StoryStatus =
  | "draft"
  | "pending"
  | "published"
  | "featured"
  | "archived";

export interface Author {
  id: string;
  name: string;
  email?: string;
  location?: string;
  avatar?: string;
  bio?: string;
}

export interface Story {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  category: StoryCategory;

  tags: string[];

  featuredImage?: string;

  author: Author;

  status: StoryStatus;

  featured: boolean;

  readTime: number;

  views: number;

  likes: number;

  createdAt: string;

  updatedAt: string;

  publishedAt?: string;

  metadata?: {
    dreamBeforeMeeting?: boolean;
    soulmateRecognition?: boolean;
    synchronicities?: boolean;
    arrangedMarriage?: boolean;
    loveMarriage?: boolean;
    pastLifeConnection?: boolean;
    spiritualSigns?: boolean;
    destinyExperience?: boolean;
  };
}

export interface StorySubmission {
  name: string;

  email: string;

  title: string;

  category: StoryCategory;

  story: string;

  agreeToPublish: boolean;
}

export interface StoryCardProps {
  id: string;

  title: string;

  excerpt: string;

  category: StoryCategory;

  author: string;

  featuredImage?: string;

  readTime: number;

  publishedAt?: string;

  featured?: boolean;
}

export interface StoryFilter {
  category?: StoryCategory;

  featured?: boolean;

  search?: string;
}

export interface StoryStats {
  totalStories: number;

  totalViews: number;

  totalAuthors: number;

  featuredStories: number;
}