import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';

import { onepointcal } from './Rootcal'

import '../css/bisection_design.css'

class One_point extends React.Component {
    state = {
        Inx :"0", ERROR: "0.000001", result: "", FX: "x/2 + 1/4"

    }
    getInx = e => {
        this.setState({
            Inx: e.target.value,
        });
    }
    getFX = e => {
        this.setState({
            FX: e.target.value,
        });
    }
    getERROR = e => {
        this.setState({
            ERROR: e.target.value,
        });
    }

    Calculate = e => {
        this.setState({
            result: onepointcal(this.state.FX,this.state.Inx,this.state.ERROR)
        });


    }
    
    render() {
        return (
           
            <div>
                
                <div className='box'>
                <h1 className='bisechead'>One-Point-Iteration</h1>
                    <div>
                        <span> FX :</span><br />
                        <span><Input placeholder="43x-1" className="data" onChange={this.getFX} /></span><br />
                        <span> In X :</span><br />
                        <span><Input placeholder="0.0" className="data" onChange={this.getInx} /></span><br />
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
export default One_point