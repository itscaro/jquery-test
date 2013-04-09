var WidgetClass = function(name) {
    this.id = Math.random();
    this.name = (name || "Widget " + this.id);
    this.template = '<div class="portlet" data-portlet-id="' + this.id + '">' +
                    '<div class="portlet-icon">Feeds</div>' +
                    '<div class="portlet-header">' + this.name + '</div>' +
                    '<div class="portlet-content"></div>' +
                    '</div>';
                    
    if (typeof Widgets !== "undefined") {         
        Widgets.push(this);
    }
};