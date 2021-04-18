import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';
import { divide } from 'mathjs';
class Cramer_r extends React.Component{
    render(){
        return(
            <div>
                 <span><Input placeholder="Basic usage"  onChange={this.getXL}/></span>
                 <span><Input placeholder="Basic usage"  onChange={this.getXL}/></span>
                 <span><Input placeholder="Basic usage"  onChange={this.getXL}/></span>
            </div>
        );

        
    }
}
export default Cramer_r