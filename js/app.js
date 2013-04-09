$(function() {
    Grid = new GridClass("body");
        
    $('#addColumn').click(function(e) {
        e.preventDefault();
        Grid.addColumn();
    });
    
    $('#removeColumn').click(function(e) {
        e.preventDefault();
        Grid.removeColumn();
    });
    
    $('#addPortlet').click(function(e) {
        e.preventDefault();
        Grid.addPortlet(new WidgetClass("My widget"));
    });
    
  });
  
var Widgets = []
, Grid;