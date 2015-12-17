TimelineHeader = React.createClass({
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
    render() {
        var styles = {
            background: {stroke: '#f1f1f1', strokeWidth: '28', cursor: 'pointer'},
            line: {strokeWidth: 3, stroke: '#F1D9D9'},
            pill: {
                text: {fill: 'black', textAnchor: 'middle'},
                thinLine: {strokeWidth: 1, stroke: '#fbe3e3'},
                fatLine: {strokeWidth: 3, stroke: '#b9a1a1'}
            }
        };

        return (
            <g>
                <line x1="0" y1="15" x2={this.props.width} y2="15" style={styles.background} onMouseDown={this.props.timelineGrab}/>
                <line x1="0" y1="30" x2={this.props.width} y2="30" style={styles.line}/>
                {_.map(this.times(), (time)=>{
                    var x = this.props.getX(time.timestamp);
                    return (
                    <g key={time.timestamp}>
                        <text x={x} y="20" style={styles.pill.text}>{time.text}</text>
                        <line x1={x} y1="30" x2={x} y2="400" style={styles.pill.thinLine} />
                        <line x1={x} y1="27" x2={x} y2="33" style={styles.pill.fatLine} />
                    </g>
                        );
                    })}
            </g>
        );
    }
});