var GridClass = function(selector) {
    this.selector = selector;
    this.selectorHolder = ".portlet-holder";
    this.selectorColumn = ".portlet-column";
    this.selectorStore = ".portlet-store";
    this.selectorPortlet = ".portlet";
    this.selectorPortletStore = "#portlet-store";
    
    /**
     * Init sortable and resize columns
     */
    this.init = function() {
        var _column =  $( this.selectorColumn );
        
        // Store
        var _store =  $( this.selectorStore );
        $('.portlet-header, .portlet-content', _store).hide();
        $('.portlet-icon', _store).show();
        
        // Columns
        var _portletHolder = $( this.selectorHolder, this.selector );
        // Connect all columns
        _portletHolder.sortable({
            handle: ".portlet-icon, .portlet-header",
            connectWith: this.selectorHolder,
            forcePlaceholderSize: true,
            forceHelperSize: true,
            //revert: true, // Animation
        });
        _portletHolder.disableSelection();
        this.resize();
        
        _store.on( "sortreceive", function( event, ui ) {
            console.log("Store.sortreceive", ui);
            $( ".portlet-header, .portlet-content, .portlet-icon", ui.item ).toggle();
        } );
        
        _column.on( "sortreceive", function( event, ui ) {
            console.log("Column.sortreceive", ui);
            $( ".portlet-header, .portlet-content", ui.item ).show();
            $( ".portlet-icon", ui.item ).hide();
        } );
        
        // Portlets
        this.initPortlet();
    };
   
    /**
     * Resize columns
     */
    this.resize = function() {
        var _column = $( this.selectorColumn, this.selector );
        _column.css({
            width: 100 / _column.length + "%"
        });
    };
    
    this.initPortlet = function(selector) {
        var self = this;
        var _portletSelector = (selector || this.selectorPortlet);
    
        //console.log("initPorlet: " + _portletSelector);

        $( _portletSelector ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
          .find( ".portlet-header" )
            .addClass( "ui-widget-header ui-corner-all" )
            .prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
            .prepend( "<span class='ui-icon ui-icon-closethick'></span>")
            .end()
          .find( ".portlet-content" );
     
        $( ".portlet-header .ui-icon-closethick", _portletSelector ).unbind('click').click(function() {
            $(this).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
            $(this).parents( ".portlet:first" ).appendTo(self.selectorStore).find( ".portlet-icon, .portlet-header, .portlet-content" ).toggle();
            $(self.selectorHolder).sortable( "refresh" );
        });
        
        $( ".portlet-header .ui-icon-minusthick", _portletSelector ).unbind('click').click(function() {
          $(this).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" )
          $(this).parents( ".portlet:first" ).toggleClass( "portlet-minimized" ).find( ".portlet-content" ).toggle();
        });
    };
    
    /**
     * Add new column
     */
    this.addColumn = function() {
        this.columns.sortable( "destroy" );
        var _newColumn = $('<div class="column"></div>');
        // Add to Grid
        _newColumn.appendTo(this.selector);
        this.init();
    };
    
    /**
     * Remove right-most column if it's empty
     */
    this.removeColumn = function() {
        var _lastColumn = $(this.selectorColumn + ':last');
        
        if (_lastColumn.html() === "") {
            _lastColumn.remove();
            this.init();
        } else {
            alert("Your right-most column is not empty, you can only delete right-most column when it\'s empty");
        }
    };
    
    this.addPortlet = function(porlet, columnIndex, position) {
        position = ( position === "prepend" ? position : "append" );
        columnIndex = ( columnIndex || 0 );
        var _column = $( this.selectorColumn + ":eq(" + columnIndex + ")" )
        , _porlet = $(porlet.template);
        
        // Add portlet to first column
        if (position === "append") {
            _porlet.appendTo(_column);
        } else {
            _porlet.prependTo(_column);
        }
        _column.sortable("refresh");
        
        this.initPortlet("div[data-portlet-id='" + _porlet.data('portlet-id') + "']");
        
        //$( this.selectorColumn ).sortable("refreshPositions");
        //$( this.selectorColumn ).sortable("option", "connectWith", this.selectorColumn);
    };
    
    this.removePorlet = function(id) {
        
    };
    
    /**
     *
     */
    this.toArray = function() {
        var _column = $( this.selectorColumn, this.selector );
        var _array = [];
        
        _column.each(function(i, e) {
            _array[i] = $( e ).sortable( "toArray", {attribute: "data-porlet-id"} );
        });
        //$('.column').sortable( "serialize", {attribute: "data-porlet-id"})
        
        return _array;
    }
    
    this.init();
};