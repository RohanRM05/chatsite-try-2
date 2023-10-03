<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $message = $_POST["message"];
    

    $servername = "31.208.45.237";
    $username = "RohanRM";
    $password = "Minkumar1";
    $dbname = "chatroomskola";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    
    
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $message = $_POST["message"];
    
        $sql = "INSERT INTO messages (sender, message) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $sender, $message);
    
        $sender = "Your Sender Name";
    
        if ($stmt->execute()) {
            echo "Message saved successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $stmt->close();
    }
    
    $conn->close();
   
}

