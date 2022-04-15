<?php

$nombre = $_POST['nombre-apellido'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header ='From: ' .$email." \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$envio = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$envio .= "Su email es: " . $email . " \r\n";
$envio .= "Mensaje: " . $mensaje . " \r\n";

$para = 'gonzalo.zabaleta15@gmail.com';

mail($para, $asunto, utf8_decode($envio), $header);

header("Location:index.html");
?>