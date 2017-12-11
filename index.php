<?php
    $name = $_GET['name'];
    $email = $_GET['email'];
    $message = $_GET['message'];
    $from = 'From: TangledDemo';
    $to = 'designbyinna@gmail.com';
    $subject = 'Hello';
    $human = $_GET['human'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit'] && $human == '4') {
        if (mail ($to, $subject, $body, $from)) {
	    echo '<p>Your message has been sent!</p>';
	} else {
	    echo '<p>Something went wrong, go back and try again!</p>';
	}
} else if ($_GET['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>
