<?php

$subject =  'Новая заявка на сайте';
$subject = "=?utf-8?B?".base64_encode($subject)."?=";

$firstName = trim($_POST['firstName']);
$secondName = trim($_POST['secondName']);
$to = "mboddah@yandex.ru";
$from = trim($_POST['email']);

$headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/plain; charset=utf-8\r\n";

$message = htmlspecialchars($_POST['message']);
$message = urldecode($message);
$message = trim("Пользователь: ".$firstName." ".$secondName."\r\nПочта: ".$from."\r\nСообщение: ".$message);

mail($to, $subject, $message, $headers);

?>