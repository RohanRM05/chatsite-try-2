<?php

$sql = "SELECT sender, message FROM messages ORDER BY id DESC";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    $messages = array();


    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }

    echo json_encode($messages);
} else {
    echo "No messages found";
}

$result->close();
$conn->close();
?>
