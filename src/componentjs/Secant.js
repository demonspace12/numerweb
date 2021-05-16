import React from 'react'
import { Secantcal } from './Rootcal'

import { Button } from 'antd';
import { Input } from 'antd';
import apis from '../api/index'
import '../css/Root.css'
import Modal_Example from '../model/model'
class Secant extends React.Component {
    state = {
        FX: '',
        x0: '',
        x1: '',
        ERROR: '',
        Result: '',
        isModalVisible: false,
        apiData: [],
        hasData: false
    };
    async getData() {
        let tempData = null
        await apis.getRoot().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        /* console.log(tempData); */
    }
    onClickOk = e => {
        this.setState({ isModalVisible: false })
    }

    onClickInsert = e => {
        let index = e.currentTarget.getAttribute('name').split('_')
        index = parseInt(index[1])
        this.setState({
            FX: this.state.apiData[index]["equation"],
            x0: this.state.apiData[index]["xl"],
            x1: this.state.apiData[index]["xr"],
            ERROR: this.state.apiData[index]["error"],
            isModalVisible: false
        })
    }
    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }
        this.setState({ isModalVisible: true })
    }
    getEquation = (e) => {
        this.setState({ Equation: e.target.value });
    }
    getx0 = (e) => {
        this.setState({ x0: e.target.value });
    }
    getx1 = (e) => {
        this.setState({ x1: e.target.value });
    }
    getERROR = (e) => {
        this.setState({ ERROR: e.target.value });
    }
    Calculate = (e) => {
        this.setState({ Result: Secantcal(this.state.FX, this.state.x0, this.state.x1, this.state.ERROR) })

    }
    render() {
        return (
            <div>

                <Modal_Example
                    visible={this.state.isModalVisible}
                    onOk={this.onClickOk}
                    hasData={this.state.hasData}
                    apiData={this.state.apiData}
                    onClick={this.onClickInsert}
                />
                <div className='box'>
                    <h1 className="bisechead">Secant</h1>
                    <div>

                        <span>F(x) =</span><br />
                        <span><Input placeholder="" className="data" onChange={this.getEquation} value={this.state.FX} /></span>

                        <span > X0 =</span><br />
                        <span><Input placeholder="1.5" className="data" onChange={this.getx0} value={this.state.x0} /></span>
                        <span > X1 =</span><br />
                        <span><Input placeholder="2.0" className="data" onChange={this.getx1} value={this.state.x1} /></span>
                        <span > ERROR : </span><br />
                        <span><Input placeholder="0.000001" className="data" onChange={this.getERROR} value={this.state.ERROR} /></span>
                        <Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวณ</Button>
                        <Button size="large" type="primary" className="button1" onClick={this.onClickExample} >EX</Button>
                    </div>
                    <div className='result'>
                        <table className='table'>
                            {this.state.Result}
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}
export default Secant