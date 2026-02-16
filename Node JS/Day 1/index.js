import express from 'express';

const app = express();
const PORT = 4000;

app.get('/products', (req, res) => {
    // db.products.find()
    res.status(200).json({
      message: "Products API",
      data: [
        { id: 1, title: "Mens Casual Premium Slim Fit T-Shirts" },
        { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts" },
      ],
    });
})

app.listen(PORT, () => {
    console.log(`Server is running`);
})