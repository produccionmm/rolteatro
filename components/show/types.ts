export type GalleryImage = {
  src: string;
  alt: string;
};

export type Show = {
  title: string;
  author: string;
  year: string;
  poster: string;
  posterAlt: string;
  summary: string;
  synopsis: string[];
  gallery: GalleryImage[];
};

export type Category = {
  title: string;
  text: string;
  button: string;
  image?: string;
  action: "catalog" | "upcoming" | "notice";
};