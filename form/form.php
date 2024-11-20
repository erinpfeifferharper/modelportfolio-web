<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'namesurname@gmail.com'

$email_subject = 'new form submission'

$email_body = "user name: $name.\n".
"user email: $visitor_email.\n".
"subject: $subject.\n".
"user message: $message.\n";

$to = 'erinharper24@gmail.com';

$headers = "from: $email_from \r\n";

$headers .= "reply-to $visitors_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("location: contact.html");


?>