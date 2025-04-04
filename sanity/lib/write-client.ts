/*
 * @Date: 2025-04-01 17:13:41
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-03 14:04:40
 */
import "server-only";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
});

console.log(writeClient.config().token);
if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}
