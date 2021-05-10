import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';

import '../css/Root.css'


import { fasepositioncal } from './Rootcal.js'

class false_po extends React.Component {
    state = {
        XL: "0.0", XR: "0.3", ERROR: "0.000001", result: "", FX: "43x-1"

    }
    getFX = e => {
        this.setState({
            FX: e.target.value,
        });
    }
    getXL = e => {
        this.setState({
            XL: e.target.value,
        });
    }
    getXR = e => {
        this.setState({
            XR: e.target.value,
        });
    }
    getERROR = e => {
        this.setState({
            ERROR: e.target.value,
        });
    }
    Calculate = e => {
        this.setState({
            result: fasepositioncal(this.state.XL, this.state.XR, this.state.ERROR, this.state.FX)
        });


    }
    render() {
        return (
            <div>
                
                <div className='box'>
                <h1 className='bisechead'>False-Position</h1>
                    <div>
                        <span> FX :</span><br />
                        <span><Input placeholder="43x-1" className="data" onChange={this.getFX} /></span><br />
                        <span> XL :</span><br />
                        <span><Input placeholder="0.0" className="data" onChange={this.getXL} /></span><br />
                        <span> XR :</span><br />
                        <span><Input placeholder="0.3" className="data" onChange={this.getXR} /></span><br />
                        <span> ERROR :</span><br />
                        <span><Input placeholder="0.000001" className="data" onChange={this.getERROR} /></span><br />
                        <span><Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวณ</Button></span>
                    </div>
                    <div className='result'>
                        {this.state.result}
                    </div>
                </div>
            </div>
        );
    }
}
export default false_po