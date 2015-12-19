ReactTimeline = React.createClass({
    getInitialState() {
        return {width: 900, mode: {type: 'none'}, offset: 0};
    },
    timelineGrab(e){
        this.setState({mode: {type: 'panning', offsetX: e.pageX, existingOffset: this.state.offset}});
    },
    timelineDrag(e){
        switch(this.state.mode.type){
            case 'panning':
                this.setState({offset: this.state.mode.existingOffset + e.pageX - this.state.mode.offsetX});
                break;
        }
    },
    timelineDrop(e){
        this.setState({mode: {type: 'none'}});
    },
    timelinePan(e){
        if(e.deltaX === 0) return; // A vertical scroll also ends up here, to prevent page blockage we return if the deltaX is 0
        this.setState({offset: this.state.offset - e.deltaX});
        e.preventDefault();
    },
    render() {

        if(this.props === undefined || this.props.documents === undefined)
            return <span>not active yet...</span>;

        var styles = {
            svg: { overflow: 'hidden', position: 'relative', width: '900px', height: '500px', border: 'solid #b9a1a1 1px'},
            document: {
                text: {
                    textAnchor: "end",
                    alignmentBaseline: "middle",
                    fill: "black"
                },
                activeLine: { strokeWidth: "3", stroke: '#45A3E6' },
                nonActiveLine: { strokeWidth: "3", stroke: '#F1D9D9'},
                startCircle: {r: 10, fill: "#05C352", stroke: "none", strokeWidth: "3"}
            }
        };

        return (
            <div>
                <h2>React Timeline ({this.props.documents.length} documents)</h2>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={styles.svg}
                     onMouseMove={this.timelineDrag}
                     onMouseUp={this.timelineDrop}
                     onWheel={this.timelinePan}>

                    <TimelineHeader width={this.state.width} timelineGrab={this.timelineGrab} getX={this.getX}/>

                    {_.map(this.props.documents, (document, i)=>{
                        var y = this.getY(i);
                        var startX = this.getX(document.creationTimestamp);
                        return (
                            <g key={document.uuid}>
                                <text x={startX-20} y={y} style={styles.document.text}>{document.name}</text>
                                <line x1={startX} y1={y} x2={this.state.width} y2={y} style={ document.activated ? styles.document.activeLine : styles.document.nonActiveLine } />
                                <circle cx={startX} cy={y} style={styles.document.startCircle}/>

                                {_.map(document.events, (event)=>{
                                    return <TimelineHooverable key={event.timestamp} color='#05622B' text={event.description} x={this.getX(event.timestamp)} y={y} />;
                                    })}
                            </g>
                            );
                        })}
                </svg>
            </div>
        );
    },
    getX(date){
        var end = Date.now()+1000*60*60*24*20;
        var daysAgo = (end-date)/(1000*60*60*24);
        var correction = (1/265)*this.state.width;
        return this.state.width - daysAgo*correction + this.state.offset;
    },
    getY(index){
        return 60 + index * 50;
    }
});