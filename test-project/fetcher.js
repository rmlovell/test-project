import fetch from "node-fetch";
export default async function asyncFetch(url) {
    return await fetch(url);
  }