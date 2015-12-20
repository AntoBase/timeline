Template.BlazeTimeline.onCreated(function () {
    var template = this;
    template.offset = new ReactiveVar(0);
    template.mode = new ReactiveVar({type: 'none'});
});

Template.BlazeTimeline.helpers({
    times(){
        return [
            {text: 'now',  timestamp: Date.now() },
            {text: 'dec',  timestamp: moment("2015-12-01").valueOf() },
            {text: 'nov',  timestamp: moment("2015-11-01").valueOf() },
            {text: 'oct',  timestamp: moment("2015-10-01").valueOf() },
            {text: 'sept', timestamp: moment("2015-09-01").valueOf() },
            {text: 'aug',  timestamp: moment("2015-08-01").valueOf() },
            {text: 'jul',  timestamp: moment("2015-07-01").valueOf() },
            {text: 'jun',  timestamp: moment("2015-06-01").valueOf() },
            {text: 'may',  timestamp: moment("2015-05-01").valueOf() },
            {text: 'apr',  timestamp: moment("2015-04-01").valueOf() },
            {text: 'mar',  timestamp: moment("2015-03-01").valueOf() },
            {text: 'feb',  timestamp: moment("2015-02-01").valueOf() },
            {text: 'jan',  timestamp: moment("2015-01-01").valueOf() }
        ];
    },
    width(){
        return 900;
    },
    getX(date){
        var end = Date.now()+1000*60*60*24*20;
        var daysAgo = (end-date)/(1000*60*60*24);
        var correction = (1/265)*900;
        return 900 - daysAgo*correction +Template.instance().offset.get();
    },
    offssetX(){
        return 0;
    },
    offset(){
        return Template.instance().offset.get();
    },
    getY(index){
        return 60 + index * 50;
    }
});

Template.BlazeTimeline.events({
    'vmousedown .timelineView'(e, template){
        e.preventDefault();
        e.stopPropagation();
        template.mode.set({type: 'panning', offsetX: e.pageX, existingOffset: template.offset.get()});
    },
    'vmousemove .timelineView'(e, template){
        var mode = template.mode.get();
        switch(mode.type){
            case 'panning':
                template.offset.set(mode.existingOffset + e.pageX - mode.offsetX);
                break;
        }
    },
    'vmouseup .timelineView'(e, template){
        template.mode.set({type: 'none'});
    },
    'wheel': function(e, template){
        if(e.originalEvent.deltaX === 0) return; // A vertical scroll also ends up here, to prevent page blockage we return if the deltaX is 0
        var offset = template.offset.get();
        template.offset.set(offset - e.originalEvent.deltaX);
        e.preventDefault();
    }
});

Template.BlazeTimelineHighlightable.onCreated(function () {
    var template = this;
    template.hover = new ReactiveVar(false);
});

Template.BlazeTimelineHighlightable.helpers({
    getX(date){
        var end = Date.now()+1000*60*60*24*20;
        var daysAgo = (end-date)/(1000*60*60*24);
        var correction = (1/265)*900;
        return 900 - daysAgo*correction +Template.instance().data.offset;
    },
    getY(index){
        return 60 + index * 50;
    },
    hover(){
        return Template.instance().hover.get();
    }
});

Template.BlazeTimelineHighlightable.events({
    'mouseenter .item'(e, template){
        Template.instance().hover.set(true);
    },
    'mouseleave .item'(e, template){
        Template.instance().hover.set(false);
    }
});