/*
 * @Date: 2025-04-01 17:13:41
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-03 13:51:54
 */
// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: "vX", //允许 Sanity API 实时获取内容更新，意味着当你的 Sanity Studio 发生更改时，前端也能立即反映最新数据，而无需刷新或额外的 API 调用。
  }),
});
