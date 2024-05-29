<!DOCTYPE html>
<html>
<?php

?>
<head>
    <meta charset="utf-8">
    <title>Chat box</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
                setInterval(function() {
                $("#messages").load("affichage_copy.php");
            }, 1000);
        });
    </script>
</head>
<body>

<form method="post" id="message-form">
    <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" required><br />
    <input type="text" name="message" id="message" placeholder="Votre message" required><br />
    <input type="submit" name="formsend" id="formsend" value="Envoyer">
</form>


    
<div id="messages">
    <?php
    $file = "affichage_copy.php";
    if (file_exists($file)) {
        include $file;
    } else {
        echo "Le fichier n'existe pas.";
    }
    ?>
</div>

<?php
if (isset($_POST["formsend"])) {
    extract($_POST);
    if (!empty($message)) {
        if ($message == "DELETE from message") {
            $q = $db->query("DELETE FROM message");
        } else {
            $q = $db->prepare("INSERT INTO message(pseudo, message) VALUES(:pseudo, :message)");
            $q->execute(['pseudo' => $pseudo, 'message' => $message]);
        }
    }
}

?>

</body>
</html>
