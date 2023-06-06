import { GET_PRODUCT_BY_CATEGORY } from "../action-constants/product-action-constant";

const initialProductData = [
    {
        name: "Luxury Leather Sofa",
        description: "Premium leather sofa with elegant design.",
        price: 1999,
        category: "Sofas",
        images: [
            "https://example.com/sofa1.jpg",
            "https://example.com/sofa1-2.jpg",
        ],
    },
    {
        name: "Modern Glass Coffee Table",
        description: "Stylish coffee table with a glass top.",
        price: 299,
        category: "Tables",
        images: [
            "https://example.com/table1.jpg",
            "https://example.com/table1-2.jpg",
        ],
    },
    {
        name: "Wooden Dining Chair",
        description: "Classic wooden chair for dining area.",
        price: 99,
        category: "Chairs",
        images: [
            "https://example.com/chair1.jpg",
            "https://example.com/chair1-2.jpg",
        ],
    },
    {
        name: "King Size Bed with Storage",
        description: "Spacious king-sized bed with built-in storage.",
        price: 1599,
        category: "Beds",
        images: [
            "https://example.com/bed1.jpg",
            "https://example.com/bed1-2.jpg",
        ],
    },
    {
        name: "Modern Display Cabinet",
        description: "Sleek display cabinet with glass doors.",
        price: 699,
        category: "Cabinets",
        images: [
            "https://example.com/cabinet1.jpg",
            "https://example.com/cabinet1-2.jpg",
        ],
    },
];

export default function productReducer(productData = initialProductData, action) {
    switch (action.type) {
        case GET_PRODUCT_BY_CATEGORY:
            // Make HTTP request here filteredProducts will contain the data

            const filteredProducts = productData.filter((product) => {
                if (product.category === action.payload) {
                    return product;
                }
            })
            return filteredProducts


        default:
            return productData

    }
}