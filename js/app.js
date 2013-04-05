$(function() {
    Grid = new GridClass();
    Grid.init();    
    
    $('#addColumn').click(function(e) {
        e.preventDefault();
        Grid.addColumn();
    })
    $('#removeColumn').click(function(e) {
        e.preventDefault();
        Grid.removeColumn();
    })
 
    $( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
        .end()
      .find( ".portlet-content" );
 
    $( ".portlet-header .ui-icon" ).click(function() {
      $( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
      $( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
    });
 
    $( ".column" ).disableSelection();
  });
  
var GridClass = function() {
    this.selectorColumn = ".column";
    this.columns;
    
    this.init = function() {
        this.columns = $( this.selectorColumn );
        this.columns.sortable({
            connectWith: this.selectorColumn
        });
        this.resize();
    }
    
    this.addColumn = function() {
        this.columns.sortable( "destroy" );
        $('body').append('<div class="column"></div>');
        this.init();
    };
    
    this.removeColumn = function() {
        var _lastColumn = $('.column:last-child');
        
        if (_lastColumn.html() === "") {
            this.columns.sortable( "destroy" );
            _lastColumn.remove();
            this.init();
        } else {
            alert('You cannot delete non empty column');
        }
    };
    
    this.resize = function() {
        this.columns.css({
            width: 100 / this.columns.length + "%"
        });
    };
};
var Grid;