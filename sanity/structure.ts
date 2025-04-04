/*
 * @Date: 2025-04-01 17:13:41
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-04 23:57:05
 */
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("startup").title("Startups"),
      S.documentTypeListItem("playlist").title("Playlists"),
    ]);
