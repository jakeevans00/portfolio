import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { notes } from "$lib/data/notionPages";

export const GET: RequestHandler = () => {
  return json(notes);
};
