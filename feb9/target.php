<?php
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Thank you for your submission</h2>
    <p>
        Name <?php echo $fname." ".$lname; ?>
    </p>
    
</body>
</html>