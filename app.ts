import Aqua from "https://deno.land/x/aqua/aqua.ts";
const app = new Aqua(3000);

app.get("/", (req) => {
  return "Hello, World!";
});