import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    // role either admin or user default value user
    role: v.optional(v.union(v.literal("admin"), v.literal("member"))),
    // this the Clerk ID, stored in the subject JWT field
    externalId: v.string(),
  }).index("byExternalId", ["externalId"]),
  // one to many relationship between users and reviews
  reviews: defineTable({
    user_id: v.id("users"),
    rating: v.float64(),
    article: v.string(),
    score: v.number(),
    media_ids: v.array(v.id("media")),
    title: v.string(), // Added title field for reviews
  })
    .index("byUser", ["user_id"])
    .searchIndex("search_title", { searchField: "title" }), // Search index for review title
  // one to many relationship between reviews and media
  media: defineTable({
    title: v.string(),
    genre: v.string(),
    synopsis: v.string(),
    images_url: v.array(v.string()),
    directors_id: v.id("directors"),
  }),
  // one to many relationship between media and actors
  actors: defineTable({
    media_id: v.id("media"),
    name: v.string(),
    profile_image_url: v.string(),
  })
    .index("byMedia", ["media_id"])
    .searchIndex("search_actor_name", { searchField: "name" }), // Search index for actor names
  // one to one relationship between media and directors
  directors: defineTable({
    media_id: v.id("media"),
    name: v.string(),
    profile_image_url: v.string(),
  })
    .index("byMedia", ["media_id"])
    .searchIndex("search_director_name", { searchField: "name" }), // Search index for director names
  // one to many relationship between users and comments
  // one to many relationship between reviews and comments
  comments: defineTable({
    user_id: v.id("users"),
    review_id: v.id("reviews"),
    message: v.string(),
  }).index("by_review_id", ["review_id"]),
  // one to many relationship between users and likes
  // one to many relationship between reviews and likes
  likes: defineTable({
    user_id: v.id("users"),
    review_id: v.id("reviews"),
  }).index("by_review_id", ["review_id"]),
});