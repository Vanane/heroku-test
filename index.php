<?php 
echo <<<HTML
<meta charset="UTF-8">
<html>
    <link rel="stylesheet" href="css.css">    
    <script src="js.js"></script>
    <service-container></service-container>
    <body>
        <div class="col left-col">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
        </div>
        <div class="col center-col">
            <div class="row">
                <a id="button" class="button">Go</a>
                <div id="names" style="overflow:visible; text-align:center">
                    <table id="tabnames" style="text-align:center"></table>
                </div>
                
            </div>
        </div>
        <div class="col right-col">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
        </div>
    </body>
</html>
HTML;
?>

