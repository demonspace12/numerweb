import React from 'react'
import { Button } from 'antd';
import { Input } from 'antd';
import '../css/Root.css'

import {Newtoncal} from './Rootcal'

class Newton_r extends React.Component{
    state = {
        Inx :"2", ERROR: "0.000001", result: "", FX: "x^2 - 7"

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
            result: Newtoncal(this.state.FX,this.state.Inx,this.state.ERROR)
        });


    }
    render(){
        return(
            <div>
                <h1 className='bisechead'>Newton Raphon</h1>
                <div className='body'>
                    <div>
                        <span> FX :</span><br />
                        <span><Input placeholder="x^2 - 7" className="gg" onChange={this.getFX} /></span><br />
                        <span> In X :</span><br />
                        <span><Input placeholder="2" className="gg" onChange={this.getInx} /></span><br />
                        <span> ERROR :</span><br />
                        <span><Input placeholder="0.000001" className="gg" onChange={this.getERROR} /></span><br />
                        <span><Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวน</Button></span>
                    </div>
                    <div className='result'>
                        {this.state.result}
                    </div>
                </div>
            </div>
        );
    }
}
export default Newton_r