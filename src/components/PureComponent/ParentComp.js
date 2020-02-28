import React, {Component, PureComponent} from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComponent from './Memo/MemoComponent';

class ParentComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Nathan'
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Nathan'
            })
        }, 2000)
    }

    render() {
        console.log('******************** Parent component ********************');
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
                {/*<RegComp name={this.state.name} />
                <PureComp name={this.state.name} />*/}
            </div>
        );
    }
}

export default ParentComp;
