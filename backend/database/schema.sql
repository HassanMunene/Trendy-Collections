
-- This SQL schema is designed for an e-commerce platform with a focus on products, categories, and collections.
-- categories (1) ------ (∞) products
-- products (1) -------- (∞) product_colors
-- products (1) -------- (∞) product_images
-- collections (1) ---- (∞) collection_products (∞) ---- (1) products


-- PRODUCTS TABLE
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2),
    image_url TEXT,
    rating FLOAT,
    review_count INT,
    is_best_seller BOOLEAN DEFAULT FALSE,
    is_new BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    category_id INT,
    subcategory VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- CATEGORIES TABLE
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PRODUCT COLORS TABLE
CREATE TABLE product_colors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    hex CHAR(7),
    in_stock BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- PRODUCT IMAGES TABLE
CREATE TABLE product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- COLLECTIONS TABLE
CREATE TABLE collections (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- COLLECTION_PRODUCTS JOIN TABLE
CREATE TABLE collection_products (
    collection_id VARCHAR(50) NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (collection_id, product_id),
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);