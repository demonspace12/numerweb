import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';
import { calBisection } from './Rootcal';
import '../css/Root.css'




class Bisection extends React.Component {
    state = {
        XL: "1.5", XR: "2.0", ERROR: "0.000001", result: "", FX: "X^4-13"

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
            result: calBisection(this.state.FX, this.state.XL, this.state.XR, this.state.ERROR)
        });
    }



    render() {
        return (

            <div className='color'>
               
                <div className='box'>
                    <div>
                    <h1 className='bisechead'>Bisection</h1>
                        <div>
                            
                            <span> FX :</span>
                            <span><Input className='data' placeholder="X^4-13" onChange={this.getFX} /></span><br />
                            <span> XL :</span><br />
                            <span><Input placeholder="1.5" className='data'  onChange={this.getXL} /></span><br />
                        </div>
                        <div>
                            <span> XR :</span><br />
                            <span><Input className='data' placeholder="2.0"  onChange={this.getXR} /></span><br />
                            <span> ERROR :</span><br />
                            <span><Input className='data' placeholder="0.000001"  onChange={this.getERROR} /></span><br />
                           
                        </div>
                        <div className='calculate'>
                            <span><Button  size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวณ</Button></span>
                            
                        </div>
                    </div>
                    <div className='result'>
                        <table>
                            
                            {this.state.result}
                            
                        </table>
                        
                    </div>
                </div>
                
            </div>

        );
    }
}
export default Bisection