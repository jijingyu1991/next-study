/*
 * @Date: 2025-04-01 17:13:41
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-03 14:27:43
 */
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
