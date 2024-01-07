//microCSMと連携
import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "inunk38plg",
    apiKey: process.env.API_KEY,
});