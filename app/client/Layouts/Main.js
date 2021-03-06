guid = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

Template.LayoutsMain.helpers({
    ReactTimeline() {
        return ReactTimeline;
    },
    documents(){
        return [
            {
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            },{
                name: 'Document 1',
                creationTimestamp: moment("2015-01-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-02-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-03-01").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-06-01").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 2',
                creationTimestamp: moment("2015-02-01").valueOf(),
                activated: true,
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-03-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-08-30").valueOf(), description: 'Approval'}
                ]
            },
            {
                name: 'Document 3',
                creationTimestamp: moment("2015-04-01").valueOf(),
                uuid: guid(),
                events: [
                    {timestamp: moment("2015-05-30").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-09-27").valueOf(), description: 'Update'},
                    {timestamp: moment("2015-12-24").valueOf(), description: 'Approval'}
                ]
            }
        ]
    }
});