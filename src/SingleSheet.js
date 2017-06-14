import React, { Component } from 'react';
import Singles from './Singles'
import Singles2 from './Singles2'
import Singles3 from './Singles3'
import Singles4 from './Singles4'

class SingleSheet extends Component{
    render(){
        return (
            <div>
            <Singles/>
            <Singles2/>
            <Singles3/>
            <Singles4/>
            </div>
        )
    }
}
export default SingleSheet