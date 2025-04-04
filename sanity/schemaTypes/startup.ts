/*
 * @Date: 2025-04-01 18:07:00
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-02 11:27:41
 */
import { defineField, defineType } from "sanity";

const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "view",
      type: "number",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) => Rule.min(1).max(20).required().error("Category is required"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] })
          .required()
          .error("Image URL is required"),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
export default startup;
