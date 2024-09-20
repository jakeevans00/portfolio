import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { notes } from "$lib/data/notion";

export const GET: RequestHandler = () => {
  return json(notes);
};
