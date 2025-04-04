/*
 * @Date: 2025-04-02 14:05:58
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-04 23:49:45
 */
import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = `*[_type == "startup" && defined(slug.current) && !defined($searchWord) || title match $searchWord || category match $searchWord || author->name match $searchWord]| order(_createdAt desc){
  _id,
  slug,
  title,
  _createdAt,
  author->{
    _id,id,name,image,bio
  },
  view,
  description,
  category,
  image,
}`;

export const STARTUP_BY_ID_QUERY = `*[_type == "startup" && _id == $id][0]{
  _id,
  slug,
  title,
  _createdAt,
  author->{
    _id,id,name, username,image,bio
  },
  view,
  description,
  category,
  image,
  pitch
}`;

export const STARTUP_VIEWS_QUERY = `*[_type == "startup" && _id == $id][0]{
  _id,
  view,
}`;

export const AUTHOR_BY_GITHUB_ID_QUERY = `*[_type == "author" && id == $id][0]{
  _id,
  id,
  name,
  username,
  image,
  bio,}`;

export const AUTHOR_BY_ID_QUERY = `*[_type == "author" && _id == $id][0]{
  _id,
  id,
  name,
  username,
  image,
  bio,}`;

export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

export const PLAYLIST_BY_SLUG_QUERY = defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
