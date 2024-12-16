<?php
include('db.php');

// Assuming the seller's ID is stored in the session after login
session_start();
$sellerId = $_SESSION['seller_id'];

if (!$sellerId) {
    echo json_encode(['error' => 'Seller not logged in']);
    exit;
}

// Fetch selling items from the database
$query = "
    SELECT 
        p.id AS item_id, 
        p.item_details AS item_name, 
        p.selling_price AS price, 
        p.quantity AS stock, 
        p.unit, 
        p.image_url, 
        o.total_ordered AS ordered, 
        o.total_delivered AS delivered 
    FROM products p
    LEFT JOIN (
        SELECT 
            product_id, 
            SUM(quantity) AS total_ordered, 
            SUM(delivered_quantity) AS total_delivered 
        FROM orders 
        GROUP BY product_id
    ) o ON p.id = o.product_id
    WHERE p.seller_id = ?
";

$stmt = $conn->prepare($query);
$stmt->bind_param('i', $sellerId);
$stmt->execute();
$result = $stmt->get_result();

$sellingItems = [];
while ($row = $result->fetch_assoc()) {
    $sellingItems[] = [
        'item_id' => $row['item_id'],
        'item_name' => $row['item_name'],
        'price' => $row['price'],
        'stock' => $row['stock'],
        'unit' => $row['unit'],
        'image_url' => $row['image_url'],
        'ordered' => $row['ordered'] ?? 0,
        'delivered' => $row['delivered'] ?? 0,
        'total_stock' => $row['stock'],
        'total_delivered' => $row['delivered'] ?? 0,
    ];
}

echo json_encode($sellingItems);
$conn->close();
?>
