// The following below is a suggested schema for the data we will have in our
//  database and the relationships they will have:

// PRODUCTS TABLE

// Column	        Type	        Notes
// id	            INT(PK)	        Auto - increment
// name	            VARCHAR(255)	Product name
// description	    TEXT	        Optional
// price	        DECIMAL(10, 2)	Regular price
// sale_price	    DECIMAL(10, 2)	Nullable
// image_url	    TEXT	        Primary product image
// rating	        FLOAT	        Optional
// review_count     INT	            Optional
// is_best_seller	BOOLEAN	        Flag for homepage
// is_new	        BOOLEAN	        Flag for homepage
// stock	        INT	            Units available
// category_id	    INT(FK)	        Foreign key to categories
// subcategory	    VARCHAR(255)	Optional grouping inside category



// CATEGORIES TABLE. We can start by defining the categories of the products
// We will be selling for trendy so that on each product we can link it to a specific
// Category.

// Column	        Type	        Notes
// id	            INT (PK)	    "pillows", "curtains", etc.
// name	            VARCHAR(255)	Display name
// description	    TEXT	        Optional



// PRODUCT COLORS TABLE. Here we will define the colors we have in our store and specify
// The specific product that we are linking it too.

// Column	        Type	        Notes
// id	            INT (PK)	    Autoincrement
// product_id	    INT (FK)	    Links to products
// name	            VARCHAR(50)	    e.g. "white"
// hex	            CHAR(7)	        Optional — for color swatch
// in_stock	        BOOLEAN	        Optional per color



// PRODUCT IMAGES. Here we will store the urls images for a specific product.

// Column	        Type	        Notes
// id               INT (PK)	    Autoincrement
// product_id	    INT (FK)	    Links to products
// url	TEXT	    Image           URL
// is_primary	    BOOLEAN	        Optional


// COLLECTIONS TABLE

// Column	        Type	        Notes
// id	            VARCHAR(50)	    e.g. "pillows"
// name	            VARCHAR(255)	e.g. "Luxury Pillow Collection"
// description	    TEXT	        Description


// COLLECTION_PRODUCTS (MANY-TO-MANY JOIN)

// Column	        Type	        Notes
// collection_id	VARCHAR(50) (FK)	
// product_id	    INT (FK)



export const productDatabase = {
    1: {
        id: 1,
        name: 'Luxe Sateen Pillow Set',
        category: 'pillows',
        subcategory: 'sateen',
        price: 250.00,
        salePrice: 200.00,
        description: 'Experience unparalleled softness with our premium sateen pillow set. Made from 100% long-staple cotton with a 600 thread count for luxurious comfort that lasts.',
        details: [
            'Set of 2 standard pillowcases',
            '100% long-staple cotton',
            '600 thread count',
            'Sateen weave for silky smoothness',
            'Double-stitched seams for durability',
            'Hidden zipper closure'
        ],
        materials: '100% Egyptian Cotton',
        dimensions: '20" x 26" (Standard)',
        care: 'Machine wash cold, tumble dry low',
        colors: [
            { name: 'white', hex: '#ffffff', inStock: true },
            { name: 'cream', hex: '#f5f5dc', inStock: true },
            { name: 'graphite', hex: '#4d4d4d', inStock: true },
            { name: 'navy', hex: '#000080', inStock: false },
            { name: 'sage', hex: '#9CAF88', inStock: true }
        ],
        images: [
            'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1566669437688-37f7c4c9d1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1586449480561-6d7f57a6b3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        rating: 4.8,
        reviewCount: 142,
        isNew: false,
        isBestSeller: true,
        stock: 4
    },
    7: {
        id: 7,
        name: 'Silk Pillowcases',
        category: 'pillows',
        subcategory: 'silk',
        price: 149.00,
        salePrice: 126.65,
        description: 'Indulge in the ultimate sleep experience with our 100% pure mulberry silk pillowcases. Naturally hypoallergenic and temperature regulating for healthier hair and skin.',
        details: [
            '100% Grade 6A Mulberry Silk',
            '22 momme weight for durability',
            'Hidden zipper closure',
            'Double-sided silk (both sides equally luxurious)',
            'Reduces hair breakage and sleep wrinkles',
            'Naturally hypoallergenic and dust mite resistant'
        ],
        materials: '100% Mulberry Silk (Grade 6A, 22 momme)',
        dimensions: '20" x 26" (Standard)',
        care: 'Hand wash cold with mild detergent, lay flat to dry',
        colors: [
            { name: 'white', hex: '#ffffff', inStock: true },
            { name: 'cream', hex: '#f5f5dc', inStock: true },
            { name: 'dune', hex: '#C2B280', inStock: false },
            { name: 'sienna', hex: '#A0522D', inStock: true }
        ],
        images: [
            'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1566669437688-37f7c4c9d1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1586449480561-6d7f57a6b3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        rating: 4.9,
        reviewCount: 89,
        isNew: true,
        isBestSeller: false,
        stock: 8
    }
};

// export const fetchPosts = (): Promise<TweetProps[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const userTweets = TWEETS.filter(
//         (tweet) => tweet.user.username === username
//       );
//       resolve(userTweets);
//     }, 800);
//   });
// };