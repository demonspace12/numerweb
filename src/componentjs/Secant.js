import React from 'react'
import{Secantcal} from './Rootcal'

import { Button } from 'antd';
import { Input } from 'antd';
class Secant extends React.Component{
    state = {
        X0: "2.0", X1: "2.2", ERROR: "0.000001", result: "", FX: "x^2 - 7"

    }
    getFX = e => {
        this.setState({
            FX: e.target.value,
        });
    }
    getX0 = e => {
        this.setState({
            X0: e.target.value,
        });
    }
    getX1 = e => {
        this.setState({
            X1: e.target.value,
        });
    }
    getERROR = e => {
        this.setState({
            ERROR: e.target.value,
        });
    }
    Calculate = e => {
        this.setState({
            result: Secantcal(this.state.FX,this.state.X0,this.state.X1,this.state.ERROR)
        });
    }
    render(){
        return(
            <div>
                <h1 className='bisechead'>Secant</h1>
                <div className='body'>
                    <div>
                        <span> FX :</span><br />
                        <span><Input placeholder="x^2 - 7" className="gg" onChange={this.getFX} /></span><br />
                        <span> X0 :</span><br />
                        <span><Input placeholder="2.0" className="gg" onChange={this.getX0} /></span><br />
                        <span> X1 :</span><br />
                        <span><Input placeholder="2.2" className="gg" onChange={this.getX1} /></span><br />
                        <span> ERROR :</span><br />
                        <span><Input placeholder="0.000001" className="gg" onChange={this.getERROR} /></span><br />
                        <span><Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวน</Button></span>
                    </div>
                    <div className='result'>
                        {/* <table>
                            <tr>
                                <th>I</th>
                                <th>xm</th>
                                <th>er</th>
                            </tr>
                            
                            {this.state.result}
                            
                        </table> */}
                        {this.state.result}
                    </div>
                </div>
            </div>
        );
    }
}
export default Secant