import React from 'react'

import { Button, Input } from 'antd';
import { Row, Col } from 'antd';
import { InputXY } from './matrix/input_matrix'
import { calLinear,copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'




class Linear extends React.Component {
    state = {
        n: 0,
        m:0,
        matrixA: [],
        Point: [],
        valueX: '',
        data: "",
        isModalVisible: false,
        apiData: [],
        hasData: false,
        Ex:0
    }
    async getData() {
        let tempData = null
        await apis.getRegession().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        this.onClickInsert()
    }

    

    onClickInsert(){
        let index = this.state.Ex
        this.setState({
            matrixA: copyArray(this.state.apiData[index]["n"], this.state.apiData[index]["matrixA"]),
            n: this.state.apiData[index]["n"],
            valueX: this.state.apiData[index]["x"],
            
        })
    }

    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }
        
    }


    onChangeX = e => {
        this.setState
            (
                { valueX: e.target.value }
            )
    }
    onChangePoint = e => {
        let index = []
        index = e.target.value
        this.setState
            (
                { Point: index.split(",") }
            )
    }
    onChangematrixXY = (e) => {
        let index = e.target.name.split(" ")
        let value = e.target.value
        this.state.matrixA[parseInt(index[0])][parseInt(index[1])] = value
        console.log(this.state.matrixA.toString())


    }
    onClickcreate = e => {
        this.setState({ n: this.state.m })
    }
    oncreate = e => {
        let num = e.target.value
        for (let i = 0; i < num; i++) {
            this.state.matrixA.push([])
        }

        this.setState({ m: num })

    }
    onClickCalculator = (e) => {
        this.setState({ data: calLinear(this.state.matrixA, this.state.valueX) })
    }
    render() {

        return (
            <div className="newtondevide">
               
                <div className='box'>
                    <h1 className="bisechead">Linear</h1>
                    <Input className='sizeshow' onChange={this.oncreate} value={this.state.m} />
                    <Button className='button1' onClick={this.onClickcreate}>Create</Button><br/>
                    <span>X :</span><span className='margin'>Y :</span>
                    <div>
                        <InputXY n={this.state.n} onChange={this.onChangematrixXY} value={this.state.matrixA} /><br/>
                        <div>
                            ค่า X
                        </div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX} value={this.state.valueX} />

                        <br />
                        <Button size="large" className='button1' type="primary" onClick={this.onClickCalculator}>คำนวณ</Button>
                        <Button size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                    </div>




                    <div>
                        <table className='table'>{this.state.data}</table>

                    </div>
                </div>
            </div>
        )
    }
}

export default Linear