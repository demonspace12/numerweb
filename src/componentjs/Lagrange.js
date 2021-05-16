import React from 'react'

import { Button, Input } from 'antd';
import { Row, Col } from 'antd';
import { InputXY } from './matrix/input_matrix'
import { calLagrange,copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'
import Modal_Example from '../model/model'


class Lagrange extends React.Component {
    state = {
        n: 2,
        matrixA: [[], []],
        Point: [],
        valueX: '',
        data: "",
        isModalVisible: false,
        apiData: [],
        hasData: false
    }
    async getData() {
        let tempData = null
        await apis.getInter().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        /* console.log(tempData); */
    }

    onClickOk = e => {
        this.setState({ isModalVisible: false })
    }

    onClickInsert = e => {
        /*         console.log(e.currentTarget);
                console.log(e.target);
                console.log(e.currentTarget.getAttribute('name'));
                console.log(e.target.name); */
        let index = e.currentTarget.getAttribute('name').split('_')
        index = parseInt(index[1])
        this.setState({
            matrixA: copyArray(this.state.apiData[index]["n"], this.state.apiData[index]["matrixA"]),
            Point: [...this.state.apiData[index]["point"]],
            n: this.state.apiData[index]["n"],
            valueX: this.state.apiData[index]["x"],
            isModalVisible: false
        })
    }

    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }
        this.setState({ isModalVisible: true })
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
    onClickmatrixadd = (e) => {
        if (this.state.n < 10) {
            this.setState({ n: this.state.n += 1 })
            this.state.matrixA.push([])
        }
    }
    onClickmatrixdel = (e) => {
        if (this.state.n > 2) {
            this.setState({ n: this.state.n -= 1 })
            this.state.matrixA.pop([])
        }
    }
    onClickCalculator = (e) => {
        this.setState({ data: calLagrange(this.state.matrixA, this.state.Point, this.state.valueX) })
    }
    render() {

        return (
            
            <div className="newtondevide">
                <Modal_Example
                    visible={this.state.isModalVisible}
                    onOk={this.onClickOk}
                    hasData={this.state.hasData}
                    apiData={this.state.apiData}
                    onClick={this.onClickInsert}
                />
                <div className='box'>
                    <h1 className="bisechead">Lagrange</h1>
                    <Button className='ad' type="primary" onClick={this.onClickmatrixdel}> Delete </Button>
                    <Button className='ad' type="primary" onClick={this.onClickmatrixadd}> Add </Button>
                    <div>
                        <InputXY n={this.state.n} onChange={this.onChangematrixXY} value={this.state.matrixA} />
                        <div>
                            ค่า X
                        </div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX} value={this.state.valueX} />
                        <div>
                            ใส่จำนวนจุดที่ต้องการ
                        </div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 1,2,3' onChange={this.onChangePoint} value={this.state.Point} />
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

export default Lagrange