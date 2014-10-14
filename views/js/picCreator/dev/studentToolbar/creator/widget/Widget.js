define([
    'taoQtiItem/qtiCreator/widgets/static/Widget',
    'studentToolbar/creator/widget/states/states'
], function(Widget, states){

    var StudentToolbarWidget = Widget.clone();

    StudentToolbarWidget.initCreator = function(){
        
        this.registerStates(states);
        
        Widget.initCreator.call(this);
    };
    
    return StudentToolbarWidget;
});