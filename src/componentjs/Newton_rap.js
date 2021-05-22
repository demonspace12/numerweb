import React from 'react'
import { Button } from 'antd';
import { Input } from 'antd';
import apis from '../api/index'
import '../css/Root.css'
import Modal_Example from '../model/model'

import { Newtoncal } from './Rootcal'

class Newton_r extends React.Component {
    /* state = {
        Inx :"2", ERROR: "0.000001", result: "", FX: "x^2 - 7"

    } */
    state = {
        FX: '',
        Inx: '',
        ERROR: '',
        result: '',
        isModalVisible: false,
        apiData: [],
        hasData: false,
        Ex:3
    };

    async getData() {
        let tempData = null
        await apis.getRoot().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        this.onClickInsert()
    }

    onClickInsert(){
        let index = this.state.Ex
        this.setState({
            FX: this.state.apiData[index]["equation"],
            Inx: this.state.apiData[index]["initial_x"],

            ERROR: this.state.apiData[index]["error"],

        })
    }
    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }

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
            result: Newtoncal(this.state.FX, this.state.Inx, this.state.ERROR)
        });


    }
    render() {
        return (
            <div>


                <div className='box'>
                    <h1 className='bisechead'>Newton Raphon</h1>
                    <div>
                        <span> FX :</span><br />
                        <span><Input placeholder="x^2 - 7" className="data" onChange={this.getFX} value={this.state.FX} /></span><br />
                        <span> In X :</span><br />
                        <span><Input placeholder="2" className="data" onChange={this.getInx} value={this.state.Inx} /></span><br />
                        <span> ERROR :</span><br />
                        <span><Input placeholder="0.000001" className="data" onChange={this.getERROR} value={this.state.ERROR} /></span><br />
                        <span><Button size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวณ</Button></span>
                        <Button size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                    </div>
                    <div className='result'>
                        <table className='table'>{this.state.result}</table>

                    </div>
                </div>
            </div>
        );
    }
}
export default Newton_r