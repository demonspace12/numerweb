import React from 'react'

import { Button, Input } from 'antd';
import { Row, Col } from 'antd';
import { InputXY } from './matrix/input_matrix'
import { calLagrange } from './Rootcal'



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
                    </div>

                   


                    
                    <div>
                        {this.state.data}
                    </div>
                </div>
            </div>
        )
    }
}

export default Lagrange