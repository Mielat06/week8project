import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Desk Chair", category: "Furniture" },
  { name: "Skirt", category: "Clothing" },
];
app.get("/", function (req, res) {
  res.json("Welcome to the Product API!");
});
app.get("/products", (request, response) => {
  response.json(products);
});
const PORT = 8080;

app.listen(PORT, function (req, res) {
  console.log(
    `Server is running running, and running running on Port: ${PORT}`
  );
});
