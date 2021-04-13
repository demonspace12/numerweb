import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';

class false_po extends React.Component{
    render(){
        return(
            <div>
                <h1 className='bisechead'>Bisection</h1>
                <div>
                    <span> FX :</span>
                    <span><Input placeholder="Basic usage"  onChange={this.getFX}/></span>
                </div>
                <div>
                    <span> XL :</span>
                    <span><Input placeholder="Basic usage"  onChange={this.getXL}/></span>
                    <span> XR :</span>
                    <span><Input placeholder="Basic usage"  onChange={this.getXR}/></span>
                    <span> ERROR :</span>
                    <span><Input placeholder="Basic usage"  onChange={this.getERROR}/></span><br />
                    <span><Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวน</Button></span>
                </div>
                <div>
                    {this.state.result}
                </div>
            </div>
        );
    }
}
export default false_po