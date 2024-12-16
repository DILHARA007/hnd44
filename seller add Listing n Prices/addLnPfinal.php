<?php
include('db.php');

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $category = $_POST['category'];
    $itemDetails = $_POST['item_details'];
    $sellingPrice = $_POST['selling_price'];
    $quantity = $_POST['quantity'];

    // Save to products table
    $query = "INSERT INTO products (category, item_details, selling_price, quantity) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssdi", $category, $itemDetails, $sellingPrice, $quantity);
    $stmt->execute();

    $productID = $stmt->insert_id;

    // Save price ranges if available
    if (isset($_POST['price_from'])) {
        $priceFrom = $_POST['price_from'];
        $priceTo = $_POST['price_to'];
        $rangePrice = $_POST['range_price'];

        for ($i = 0; $i < count($priceFrom); $i++) {
            $query = "INSERT INTO price_ranges (product_id, price_from, price_to, price) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("iidd", $productID, $priceFrom[$i], $priceTo[$i], $rangePrice[$i]);
            $stmt->execute();
        }
    }

    // Redirect to My Selling Items page
    header("Location: mySellingItems.php");
    exit();
}
?>
