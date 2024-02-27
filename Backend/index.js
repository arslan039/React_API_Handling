import express from "express";
const app = express();

app.get("/api/products", function (req, res) {
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 1200.0,
      property: "electronics",
      model: "XPS 13",
    },
    {
      id: 2,
      name: "smartphone",
      price: 799.99,
      property: "electronics",
      model: "iPhone 13",
    },
    {
      id: 3,
      name: "running shoes",
      price: 89.95,
      property: "footwear",
      model: "Air Zoom Pegasus 38",
    },
    {
      id: 4,
      name: "coffee maker",
      price: 129.99,
      property: "appliances",
      model: "BrewSense Drip Coffee Maker",
    },
    {
      id: 5,
      name: "backpack",
      price: 49.99,
      property: "fashion",
      model: "Venture Pal Lightweight Packable Backpack",
    },
    {
      id: 6,
      name: "fitness tracker",
      price: 59.95,
      property: "electronics",
      model: "Fitbit Charge 4",
    },
    {
      id: 7,
      name: "smart tv",
      price: 699.0,
      property: "electronics",
      model: "Samsung QLED Q80A",
    },
    {
      id: 8,
      name: "gaming chair",
      price: 199.99,
      property: "furniture",
      model: "RESPAWN 110 Racing Style Gaming Chair",
    },
    {
      id: 9,
      name: "digital camera",
      price: 549.95,
      property: "electronics",
      model: "Canon EOS Rebel T7i",
    },
    {
      id: 10,
      name: "bluetooth earbuds",
      price: 79.99,
      property: "electronics",
      model: "AirPods Pro",
    },
  ];

  if (req.query.search) {
    const filterProdcts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProdcts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 4000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`the server is listening on ${port}.`);
});
