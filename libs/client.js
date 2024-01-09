//microCSMと連携
//import { createClient } from "microcms-js-sdk";

// export const client = createClient({
//     serviceDomain: "inunk38plg",
//     apiKey: process.env.API_KEY,
// });

// libs/client.js
import { createClient } from "microcms-js-sdk";

let clientInstance;

export const getClient = () => {
  if (!clientInstance) {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API_KEY not found in environment variables");
    }

    clientInstance = createClient({
      serviceDomain: "inunk38plg",
      apiKey,
    });
  }

  return clientInstance;
};
