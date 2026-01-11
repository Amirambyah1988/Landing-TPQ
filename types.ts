
export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type AuthMode = 'login' | 'register';
