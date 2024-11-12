const Products = [
    {
        id: 1,
        name: "boAt Nirvana 751 ANC",
        imageUrl: "https://m.media-amazon.com/images/I/71ISIssoVFL._SX522_.jpg",
        actualPrice: 79.99,
        discountedPrice: 59.99,
        discountPercentage: 25,
        rating: 4.5,
        description: "boAt Nirvana 751 ANC headphones offer premium sound with active noise cancellation, providing an immersive listening experience. Designed for comfort with deep bass and clear treble, they are perfect for work, travel, or leisure."
    },
    {
        id: 2,
        name: "iPhone 16 Pro",
        imageUrl: "https://m.media-amazon.com/images/I/713SsA7gftL._SX679_.jpg",
        actualPrice: 899.99,
        discountedPrice: 699.99,
        discountPercentage: 22,
        rating: 4.8,
        description: "The iPhone 16 Pro combines sleek design with powerful performance. With a high-resolution display, advanced camera, and A16 chip, it’s perfect for capturing stunning photos, gaming, and multitasking."
    },
    {
        id: 3,
        name: "Fire-Boltt Phoenix Pro",
        imageUrl: "https://m.media-amazon.com/images/I/61Y8u2y5XOL._SX679_.jpg",
        actualPrice: 249.99,
        discountedPrice: 199.99,
        discountPercentage: 20,
        rating: 4.3,
        description: "The Fire-Boltt Phoenix Pro smartwatch tracks heart rate, SpO2, and sleep, offering comprehensive fitness data. With a vibrant display and long battery life, it’s designed for active lifestyles."
    },
    {
        id: 4,
        name: "Boult Audio Z40",
        imageUrl: "https://m.media-amazon.com/images/I/71ITkeoYiTL._SX522_.jpg",
        actualPrice: 249.99,
        discountedPrice: 199.99,
        discountPercentage: 20,
        rating: 4.0,
        description: "Boult Audio Z40 wireless earphones offer ergonomic comfort and premium sound. With deep bass and long battery life, they’re perfect for both everyday use and workouts."
    },
    {
        id: 5,
        name: "HP Pavilion 16",
        imageUrl: "https://m.media-amazon.com/images/I/610dFN6sQGL._SX679_.jpg",
        actualPrice: 1199.99,
        discountedPrice: 999.99,
        discountPercentage: 17,
        rating: 4.9,
        description: "The HP Pavilion 16 delivers high performance for gaming and work. With a 16-inch display, powerful processor, and dedicated graphics, it’s perfect for both productivity and entertainment."
    },
    {
        id: 6,
        name: "Samsung Galaxy Tab A9+",
        imageUrl: "https://m.media-amazon.com/images/I/61afkty1foL._SX522_.jpg",
        actualPrice: 349.99,
        discountedPrice: 299.99,
        discountPercentage: 14,
        rating: 4.7,
        description: "The Samsung Galaxy Tab A9+ features a large, vibrant screen, ideal for streaming, reading, and light work. It offers solid performance and long battery life in a sleek, portable design."
    },
    {
        id: 7,
        name: "Apple iPhone 15 Silicone Case",
        imageUrl: "https://m.media-amazon.com/images/I/41qp3-LSTBL._SX679_.jpg",
        actualPrice: 99.99,
        discountedPrice: 79.99,
        discountPercentage: 20,
        rating: 4.2,
        description: "The Apple iPhone 15 Silicone Case offers a soft-touch finish and reliable protection. Slim and lightweight, it’s designed for a comfortable grip and precise access to all buttons and ports."
    },
    {
        id: 8,
        name: "EvoFox Elite X RGB Gamepad",
        imageUrl: "https://m.media-amazon.com/images/I/71ghAT0kkNL._SX522_.jpg",
        actualPrice: 399.99,
        discountedPrice: 299.99,
        discountPercentage: 25,
        rating: 4.5,
        description: "The EvoFox Elite X RGB Gamepad features customizable lighting, ergonomic grips, and responsive buttons, providing an immersive gaming experience for both casual and competitive players."
    },
    {
        id: 9,
        name: "Gaming Console NiTHO Drive Pro",
        imageUrl: "https://m.media-amazon.com/images/I/710J0h6J+aL._SX522_.jpg",
        actualPrice: 499.99,
        discountedPrice: 399.99,
        discountPercentage: 20,
        rating: 4.6,
        description: "The NiTHO Drive Pro gaming console offers smooth gameplay with high-performance hardware and advanced controls. Whether for casual or competitive gaming, it ensures a seamless experience."
    },
    {
        id: 10,
        name: "FDUCE M160 Gaming USB Microphone",
        imageUrl: "https://m.media-amazon.com/images/I/61yI89022tL._SX679_.jpg",
        actualPrice: 249.99,
        discountedPrice: 199.99,
        discountPercentage: 20,
        rating: 4.8,
        description: "The FDUCE M160 USB Microphone delivers clear, noise-free sound with an adjustable stand. Perfect for gamers, streamers, and content creators looking for a high-quality, plug-and-play microphone."
    },
    {
        id: 11,
        name: "Steelbird SBA-7 Huracan Helmet",
        imageUrl: "https://m.media-amazon.com/images/I/61Nf-VNq1xL._SX679_.jpg",
        actualPrice: 99.99,
        discountedPrice: 79.99,
        discountPercentage: 20,
        rating: 4.4,
        description: "The Steelbird SBA-7 Huracan Helmet combines style and safety with advanced ventilation, premium padding, and a sleek design. It’s lightweight, comfortable, and perfect for long motorcycle rides."
    },
    {
        id: 12,
        name: "Apple Watch Series 10",
        imageUrl: "https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg",
        actualPrice: 79.99,
        discountedPrice: 59.99,
        discountPercentage: 25,
        rating: 4.9,
        description: "The Apple Watch Series 10 tracks health metrics like heart rate and sleep while offering seamless integration with your iPhone. Its stylish design, coupled with advanced features, keeps you connected and healthy."
    },
    {
        id: 13,
        name: "Robustrion Smart 360 Degree Rotating Stand",
        imageUrl: "https://m.media-amazon.com/images/I/514iYynya5L.jpg",
        actualPrice: 39.99,
        discountedPrice: 29.99,
        discountPercentage: 25,
        rating: 4.7,
        description: "The Robustrion 360 Degree Rotating Stand lets you easily adjust your tablet or smartphone to the perfect viewing angle. It’s sturdy, compact, and ideal for hands-free video calls or media viewing."
    },
    {
        id: 14,
        name: "Panasonic LUMIX G7 16.00 MP 4K",
        imageUrl: "https://m.media-amazon.com/images/I/91xnO7qHAeL._SX522_.jpg",
        actualPrice: 24.99,
        discountedPrice: 19.99,
        discountPercentage: 20,
        rating: 4.3,
        description: "The Panasonic LUMIX G7 offers stunning 4K video and 16 MP photos, ideal for beginners and professionals alike. Its compact size and advanced features ensure high-quality shots in any setting."
    },
    {
        id: 15,
        name: "Apple AirPods Pro",
        imageUrl: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
        actualPrice: 59.99,
        discountedPrice: 49.99,
        discountPercentage: 17,
        rating: 4.5,
        description: "Apple AirPods Pro deliver immersive audio with adaptive sound and active noise cancellation. These wireless earbuds offer comfort, clear sound, and a secure fit for all-day use, whether for workouts or casual listening."
    },
    {
        id: 16,
        name: "HONOR PAD 8 30.4 cm (12) 2K Display",
        imageUrl: "https://m.media-amazon.com/images/I/61v0diOacHL._SX522_.jpg",
        actualPrice: 39.99,
        discountedPrice: 29.99,
        discountPercentage: 25,
        rating: 4.6,
        description: "The HONOR PAD 8 features a 2K display for clear visuals and solid performance. With its long battery life and portability, it’s perfect."
    },
    ]

    export default Products;
