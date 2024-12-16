<?php
include('db.php');
session_start();

// Assume seller_id is stored in the session
$sellerId = $_SESSION['seller_id'];

if (!$sellerId) {
    echo json_encode(['error' => 'Seller not logged in']);
    exit();
}

// Fetch orders received by the seller
$query = "
    SELECT 
        o.id AS order_id, 
        o.item_id, 
        p.product_name, 
        p.stock_available, 
        o.ordered_quantity, 
        o.price 
    FROM orders o
    JOIN products p ON o.item_id = p.id
    WHERE p.seller_id = ?
";

$stmt = $conn->prepare($query);
$stmt->bind_param('i', $sellerId);
$stmt->execute();
$result = $stmt->get_result();

$orders = [];
while ($row = $result->fetch_assoc()) {
    $orders[] = [
        'item_id' => $row['item_id'],
        'product_name' => $row['product_name'],
        'stock_available' => $row['stock_available'],
        'ordered_quantity' => $row['ordered_quantity'],
        'price' => $row['price']
    ];
}

echo json_encode($orders);
$conn->close();
?>
