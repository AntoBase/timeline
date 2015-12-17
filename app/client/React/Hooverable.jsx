TimelineHooverable = React.createClass({
    getInitialState() {
        return {hover: false};
    },
    render() {
        var styles = {
            circle: {fill: this.props.color, stroke: "none", strokeWidth: "3", r: "5"},
            hover: {
                circle: {fill: this.props.color, stroke: 'none', strokeWidth: '3', r: 10},
                text: {textAnchor: 'middle', fill: 'black'}
            }
        };

        return (
            <g>
                {this.state.hover ? <circle cx={this.props.x} cy={this.props.y} style={styles.hover.circle}/> : null}
                {this.state.hover ? <text x={this.props.x} y={this.props.y+30} style={styles.hover.text}>
                                        {this.props.text}
                                    </text> : null}
                <circle cx={this.props.x} cy={this.props.y} style={styles.circle} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})} />
            </g>
        );
    }
});