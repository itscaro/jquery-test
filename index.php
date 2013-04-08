<html>
    <head>
        <title></title>
        <script src="js/jquery-1.9.1.js"></script>
        <script src="js/jquery-ui-1.10.2.custom.min.js"></script>
        <script src="js/app.js"></script>
        <script src="js/grid.js"></script>
        <script src="js/widget.js"></script>
        <link rel="stylesheet" href="css/ui-lightness/jquery-ui-1.10.2.custom.css">
        <style>
        body { min-width: 520px; }
        .column {float: left; padding-bottom: 100px; }
        .portlet { margin: 0 1em 1em 0; }
        .portlet-header { margin: 0.3em; padding-bottom: 4px; padding-left: 0.2em; }
        .portlet-header .ui-icon { float: right; }
        .portlet-content { padding: 0.4em; }
        .ui-sortable-placeholder { border: 1px dotted black; visibility: visible !important; height: 50px !important; }
        .ui-sortable-placeholder * { visibility: hidden; }
        </style>
    </head>
    <body>
        <a id="addColumn" href="#">+ Column</a>
        <a id="removeColumn" href="#">- Column</a>
        <a id="addPortlet" href="#">addPortlet</a>

    <hr/>
    <div class="column">
     
      <div class="portlet" data-portlet-id="1">
        <div class="portlet-header">Feeds</div>
        <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
      </div>
     
      <div class="portlet" data-portlet-id="2">
        <div class="portlet-header">News</div>
        <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
      </div>
     
    </div>
     
    <div class="column">
     
      <div class="portlet" data-portlet-id="3">
        <div class="portlet-header">Shopping</div>
        <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
      </div>
     
    </div>
     
    <div class="column">
     
      <div class="portlet" data-portlet-id="4">
        <div class="portlet-header">Links</div>
        <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
      </div>
     
      <div class="portlet" data-portlet-id="5">
        <div class="portlet-header">Images</div>
        <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
      </div>
     
    </div>
    </body>
</html>