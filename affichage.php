<?php
 include "database.php";
?>
<div id="messages">
    <?php
    $q = $db->query("SELECT message FROM message");
    $result = $q->fetchALL(PDO::FETCH_ASSOC);
    foreach ($result as $message) {
        echo "<p>" . $message['message'] . "</p>";
    }
    ?>
</div>
