import { createFetch } from "./utils/fetch";

const fetch = createFetch();

export const fetchItems = () => {
  return fetch({
    url: "/api/items",
    method: "GET",
  });
};
