import React from 'react'
import apis from '../api/index'
import { Button } from 'antd';
import { Input } from 'antd';

import '../css/Root.css'
import Modal_Example from '../model/model'


import { fasepositioncal } from './Rootcal.js'

class false_po extends React.Component {
    /* state = {
        XL: "0.0", XR: "0.3", ERROR: "0.000001", result: "", FX: "43x-1"

    } */
    state = {
        FX: '',
        XL: '',
        XR: '',
        ERROR: '',
        result: '',
        isModalVisible: false,
        apiData: [],
        hasData: false,
        Ex:1
    };

    async getData() {
        let tempData = null
        await apis.getRoot().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        this.onClickInsert()
        
    }

    onClickOk = e => {
        this.setState({ isModalVisible: false })
    }

    onClickInsert() {
        let index = this.state.Ex
        this.setState({
            FX: this.state.apiData[index]["equation"],
            XL: this.state.apiData[index]["xl"],
            XR: this.state.apiData[index]["xr"],
            ERROR: this.state.apiData[index]["error"],
            
        })
    }
    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }
        
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
                        <span><Input placeholder="43x-1" className="data" onChange={this.getFX} value={this.state.FX} /></span><br />
                        <span> XL :</span><br />
                        <span><Input placeholder="0.0" className="data" onChange={this.getXL} value={this.state.XL} /></span><br />
                        <span> XR :</span><br />
                        <span><Input placeholder="0.3" className="data" onChange={this.getXR} value={this.state.XR} /></span><br />
                        <span> ERROR :</span><br />
                        <span><Input placeholder="0.000001" className="data" onChange={this.getERROR} value={this.state.ERROR} /></span><br />
                        <span><Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวณ</Button></span>
                        <Button size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                    </div>
                    <div className='result'>
                        <table className='table'>

                            {this.state.result}
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}
export default false_po