import React, { Component } from 'react';

class TitleComp extends Component {

    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
       )
    }
}

export default TitleComp;