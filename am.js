// Full Catalog of Products (Pre-filled with realistic electronic items & prices)
const products = [
    {
        id: 1,
        title: "Razer BlackShark V3 Pro Wireless ANC Gaming Headset for PC, 2.4 GHz, White",
        price: 209.75,
        image: "headset3.jpg"
    },
    {
        id: 2,
        title: "PlayStation 4 Console - 1TB Slim Edition (Renewed)",
        price: 177,
        image: "consoleps4.jpg"
    },
    {
        id: 3,
        title: "PlayStation®5 Digital Edition (slim) (Renewed) strage 1000gb",
        price: 718,
        image: "ps5.jpg"
    },
    {
        id: 4,
        title: " Xbox Series X – Halo Infinite Limited Edition Console Bundle",
        price: 499,
        image: "xboxsx.jpg"
    },
    {
        id: 5,
        title: "PS4 Controller ",
        price: 17.99,
        image: "dastkps4.jpg"
    },
    {
        id: 6,
        title: "XBOX Wireless Controller | X25 Special Edition",
        price: 139.35,
        image: "dastxbox.jpg"
    },
    {
        id: 7,
        title: "Gaming Controller DualSense",
        price: 69,
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=300&q=80"
    },
    {
        id: 8,
        title: "CORSAIR Vengeance RGB PRO DDR4 RAM 32GB (2x16GB) 3200MHz CL16-20-20-38 1.35V Intel AMD Desktop Computer Memory - Black ",
        price: 299,
        image: "Ram.jpg"
    },
    {
        id: 9,
        title: "RTX 5060",
        price: 500,
        image: "rt.jpg"
    }
    ,
    {
        id: 10,
        title: "RTX 4070 Super",
        price: 699,
        image: "rt4070.jpg"
    }
    ,
    {
        id: 11,
        title: "ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition Gaming Graphics Card (Nvidia GeForce RTX5090, Four Fans, 3.8 Slot Design, PCIe 5.0, 2X HDMI 2.1b, 3X DisplayPort 2.1a)",
        price: 7498.99,
        image: "rt5090.jpg"
    }
    ,
    {
        id: 12,
        title: "MSI GAMING GeForce RTX 2070 8GB GDRR6 256-bit HDMI/DP/USB Ray Tracing Turing Architecture HDCP Graphics Card (RTX 2070 ARMOR 8G), 1620 MHz",
        price: 359.99,
        image: "rt2070.jpg"
    }
     ,
    {
        id: 13,
        title: "AMD Ryzen 5 5600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
        price: 239.99,
        image: "ryzen1.jpg"
    }
    ,
    {
        id: 14,
        title: "LG 34SR60QC-W 34-inch QHD (3440x1440) Curved Smart Monitor with Streaming, UltraWide Screen, webOS, HDR10, 100Hz, Built-in Speaker, AirPlay2, Screen Share, Bluetooth, ThinQ App, White",
        price: 1444,
        image: "LGmonitor.jpg"
    }
    
     ,
    {
        id: 16,
        title: "Dell 15.6 FHD Touchscreen Laptop | 13th Gen Intel Core i5-1334U | 8GB RAM | 512GB PCIe SSD | Wi-Fi 6 | 1080p Webcam | Copilot AI | HDMI | Business & Study Ready | Windows 11",
        price: 244,
        image: "Laptop Dell.jpg"
    }
     ,
    {
        id: 17,
        title: "Lenovo V15 Business 15.6 FHD Laptop, Intel CPU, 8GB DDR5, 256GB SSD",
        price: 499,
        image: "Lenovo v15.jpg"
    }
    ,
    {
        id: 18,
        title: "Lenovo IdeaPad Slim 3 Laptop 2025 15.6” FHD 1920 x 1080 Touchscreen, AMD Ryzen 7 5825U, 8-core, AMD Radeon Graphics, 16GB DDR4, 512GB SSD, Wi-Fi 6, Bluetooth 5.2, 720p HD Camera, Windows 11 Home",
        price:569 ,
        image: "IPad linovo.jpg"
    }
    ,
    {
        id: 19,
        title: " HP 17.3: Touchscreen Laptop w/Microsoft 365, 16GB RAM, 512GB SSD+128GB UFS, Webcam w/Shutter, Fingerprint Reader, Backlit Keyboard, Microsoft Copilot Key, Intel Quad-Core CPU, Win11, Lavender",
        price: 789,
        image: "HD 17.3.jpg"
    }
     ,
    {
        id: 20,
        title: " msi Cyborg 17 17.3  FHD 144Hz Gaming Laptop: Intel Core 7-240H, NVIDIA Geforce RTX 5060, 16GB DDR5, 1TB NVMe SSD, Type C, Wi-Fi 6E, Win 11 Home: Translucent Black B2RWFKG-074US",
        price: 1600,
        image: "MSI 144hz.jpg"
    }
     ,
    {
        id: 21,
        title: " msi Vector 18 HX AI Gaming Laptop, RTX 5090 24GB GDDR7, Intel Core Ultra 9 275HX, 240HZ QHD+ Display, 64GB DDR5 RAM 2TB SSD, 13 Tops NPU, Cooler Boost 5, 2X Thunderbolt 5, RGB Backlit, WiFi 7",
        price: 5299.99,
        image: "MSI 51.jpg"
    }
    ,
    {
        id: 22,
        title: "Womier SK80 75% Keyboard with Color Multimedia Display Gaming Keyboard ",
        price: 56.99,
        image: "Keyboard5.jpg"
    }
    ,
    {
        id: 23,
        title: " 60 Percent Gaming Keyboard 68 Keys Mechanical Keyboard LED Backlit Compact Wired Keyboard with Red Switch for Windows PS4/5 Xbox Gamer(Black-White)",
        price: 69.99,
        image: "Keyboard4.jpg"
    }
    ,
    {
        id: 24,
        title: " SteelSeries Apex Pro Mini Gen 3 - Black",
        price: 32.99,
        image: "Keyboard3.jpg"
    }
    ,
    {
        id: 25,
        title: " SteelSeries Apex 3 TKL Gaming Keyboard - White",
        price: 119.99,
        image: "Keyboard2.jpg"
    }
    ,
    {
        id: 26,
        title: "Amazon Basics 2.4 GHz Wireless Optical Computer Mouse with USB Nano Receiver, Portable, No Wires, Smooth Tracking, Multi-Device Compatibility, Black ",
        price: 9.99,
        image: "maws1.jpg"
    }
    ,
    {
        id: 27,
        title: "Logitech MX Master 3S Bluetooth Wireless Mouse No Receiver - Graphite ",
        price: 79.99,
        image: "maws2.jpg"
    }
    ,
    {
        id: 28,
        title: "Razer Basilisk V4 Pro Wireless Gaming Mouse, 200 Hr Battery Life, Black ",
        price: 169.99,
        image: "maws3.jpg"
    }
    ,
    {
        id: 29,
        title: "GravaStar Mercury M2 Wireless Gaming Mouse, Hollowed-Out Design, 1K Polling ",
        price: 75.69,
        image: "maws4.jpg"
    }
    ,
    {
        id: 30,
        title: "Razer Kraken V4 X Wired USB-C & Type A Gaming Headset, Black",
        price: 37.99,
        image: "headset1.jpg"
    }
    ,
    {
        id: 31,
        title: "Logitech G Astro A50 Multi-Platform Wireless Gaming Headset - Black",
        price: 196.99,
        image: "headset2.jpg"
    }
    ,
    
    {
        id: 33,
        title: "Amazon Basics Wired Earbuds with Microphone, In-Ear Headphones, 3.5mm Jack, High Definition Sound, Secure Fit, 4.2 ft Cable, S/M/L Ear Tips, Black",
        price: 6.99,
        image: "headset4.jpg"
    }
    ,
    {
        id: 34,
        title: " VIVO AeroPoise™ Single Monitor Stand, for 17 to 32 Screens up to 19.8 lbs",
        price: 39.99,
        image: "standpc1.jpg"
    }
    ,
    {
        id: 35,
        title: "HUANUO FlowLift™ Dual Monitor Stand, Fully Adjustable Gaming Monitor Desk Mount for 13–32″ Computer Screens, Full Motion VESA 75x75/100x100 with C-Clamp & Grommet Base, Each Arm Holds 4.4 to 19.8 lbs",
        price: 49.99,
        image: "standpc2.jpg"
    }
    ,
    {
        id: 36,
        title: "HUANUO Triple Monitor Mount for 17 to 32 inch Screens, Adjustment Gaming Triple Monitor Stand with Swivel, Tilt, Rotation, Clamp & Grommet Kit",
        price: 120.99,
        image: "standpc3.jpg"
    }
    ,
    {
        id: 37,
        title: "FIFINE AmpliGame AM8 USB/XLR Dynamic Microphone for Gaming Streaming",
        price: 56.99,
        image: "mike1.jpg"
    }
    ,
    {
        id: 38,
        title: "FIFINE AmpliGame A6VW Condenser USB Desktop Microphone for Gaming PC/PS5",
        price: 34.99,
        image: "mi.jpg"
    }
    ,
    {
        id: 39,
        title: "FIFINE AmpliTank K688CT Podcast Microphone Kit, USB/XLR Dynamic Vocal Mic",
        price: 79.99,
        image: "mike3.jpg"
    }
    ,
    {
        id: 40,
        title: "MAONO A04T USB Condenser Microphone Kit, 192kHz/24bit for PC Podcasting",
        price: 58.99,
        image: "mike4.jpg"
    }
    ,
    {
        id: 41,
        title: "Logitech C920x HD Pro PC Webcam with Microphone, Full HD 1080p/30fps Video",
        price: 52.99,
        image: "camera1.jpg"
    }
    ,
    {
        id: 42,
        title: "Logitech Brio 101 Full HD 1080p Webcam for PC, Built-in Mic, Black",
        price: 26.99,
        image: "camera2.jpg"
    }
    ,
    {
        id: 43,
        title: "Acer A640 4K Webcam with AI Noise Canceling Mic for Streaming Meetings",
        price: 39.99,
        image: "camera3.jpg"
    }
    ,
    {
        id: 44,
        title: "Logitech MX Brio Ultra HD 4K Webcam for Streaming and Collaboration",
        price: 166.99,
        image: "camera4.jpg"
    }
    ,
    {
        id: 45,
        title: "UGREEN USB 3.0 Hub, 4 Ports USB A Splitter Ultra-Slim USB Expander, 3.3 ft",
        price: 30.99,
        image: "adapter1.jpg"
    }
    ,
    {
        id: 46,
        title: "TP-Link USB Bluetooth Adapter for PC, Bluetooth 5.3 USB Long Range Receiver",
        price: 12.99,
        image: "network1.jpg"
    }
    ,
    {
        id: 47,
        title: "TP-Link USB Bluetooth Adapter for PC, Bluetooth 4.0 Dongle Receiver",
        price: 8.99,
        image: "network2.jpg"
    }
    ,
    {
        id: 48,
        title: "Turtle Beach Racer Wireless Racing Wheel - Licensed for PlayStation 5 Consoles, Works with PC, Bluetooth, Wireless Connectivity, Lap Mount, 30-Hour Battery Life - Black",
        price: 179.99,
        image: "Stern1.jpg"
    }










];


// Cart State Array
let cart = [];

// DOM Elements
const productsContainer = document.getElementById("productsContainer");
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartBadge = document.getElementById("cartBadge");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const orderForm = document.getElementById("orderForm");

// Render Products
function renderProducts(productList) {
    productsContainer.innerHTML = "";
    if (productList.length === 0) {
        productsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777;">چ بەرهەمەک نەهاتە دیتن!</p>';
        return;
    }
    productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-cart-btn" onclick="addToCart(${product.id})">
                زێدەکرن بۆ سەبەتێ
            </button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Add Item To Cart by ID
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    openCartSidebar();
}

// Update Cart UI & Calculate Total
function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg" style="text-align:center; color:#777; margin-top:20px;">سەبەتەیا تە بەتالە!</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price * item.qty;
            count += item.qty;

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price} x ${item.qty}</div>
                </div>
                <i class="fa-solid fa-trash" style="color:#e53e3e; cursor:pointer;" onclick="removeFromCart(${index})"></i>
            `;
            cartItems.appendChild(itemDiv);
        });
    }

    cartBadge.innerText = count;
    cartTotal.innerText = `$${total.toFixed(2)}`;
}

// Remove Item From Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Sidebar Open/Close Functionality
function openCartSidebar() {
    cartSidebar.classList.add("open");
    cartOverlay.style.display = "block";
}

function closeCartSidebar() {
    cartSidebar.classList.remove("open");
    cartOverlay.style.display = "none";
}

// Event Listeners
cartBtn.addEventListener("click", openCartSidebar);
closeCart.addEventListener("click", closeCartSidebar);
cartOverlay.addEventListener("click", closeCartSidebar);

// Search Functionality
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(product => 
            product.title.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });
}

// WhatsApp Order Form Event Handling
if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("clientName").value.trim();
        const phone = document.getElementById("clientPhone").value.trim();
        const address = document.getElementById("clientAddress").value.trim();

        // ⚠️ لێرە ژمارەی واتسئابا خۆت بنووسە (بۆ نموونە: 9647501234567)
        const myWhatsAppNumber = "9647507162605";

        let itemsListText = "";
        let totalAmount = 0;

        if (cart.length > 0) {
            cart.forEach((item, index) => {
                itemsListText += `${index + 1}. ${item.title} (عەدد: ${item.qty}) - $${item.price * item.qty}\n`;
                totalAmount += item.price * item.qty;
            });
        } else {
            itemsListText = "⚠️ هیچ بەرهەمەک لە سەبەتەدا نەبوو.\n";
        }

        // دروستکردنی پەیامی واتسئاپ بە شێوازە جوان و ڕێکخراو
        let message = `🛒 *داواکارییا نوو ژ ماڵپەڕی*\n\n`;
        message += `👤 *ناڤێ کڕیاری:* ${name}\n`;
        message += `📞 *ژمارەیا کڕیاری:* ${phone}\n`;
        message += `📍 *ناڤنیشان:* ${address}\n\n`;
        message += `📦 *لیستا بەرهەمێن تەلەبکری:*\n${itemsListText}\n`;
        message += `💰 *کۆم ب گشتی:* $${totalAmount}\n\n`;
        message += `سڵاو، هیڤییە ئەڤ داواکارییە بۆ من بهێنن یان پشتڕاست بکەنەوە!`;

        // لێنکی فەرمی واتسئاپ
        const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;

        // ڤەکرنا واتسئابی و ڕەوانەکرنا نامەیێ بۆ تە
        window.open(whatsappURL, '_blank');


        
    });
    
}

// Initialize Product View on Load
renderProducts(products);