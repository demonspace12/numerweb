import React from 'react'

import { Button, Input } from 'antd';
import { Row, Col } from 'antd';
import { InputMultiple } from './matrix/input_matrix'
import { calMultiple } from './Rootcal'
class Multiple extends React.Component {
    state = {
        n: 2,
        valueX1: "",
        valueX2: "",
        valueX3: "",
        matrixA: [[], []],
        isModalVisible: false,
        apiData: [],
        hasData: false

    }

    onChangeX1 = e => {
        this.setState({ valueX1: e.target.value })
    }
    onChangeX2 = e => {
        this.setState({ valueX2: e.target.value })
    }
    onChangeX3 = e => {
        this.setState({ valueX3: e.target.value })
    }


    onChangematrixXY = (e) => {
        let index = e.target.name.split(" ")
        let value = e.target.value
        this.state.matrixA[parseInt(index[0])][parseInt(index[1])] = (value)



    }
    onClickmatrixadd = (e) => {
        if (this.state.n < 11) {
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

        this.setState({ data: calMultiple(this.state.n, this.state.matrixA, this.state.valueX1, this.state.valueX2, this.state.valueX3) })

    }
    render() {

        return (

            <div>
                <div className='box'>
                    <h1 className="bisechead">Multi-linear Regression</h1>

                    <Button className='ad' type="primary" onClick={this.onClickmatrixdel}> Delete </Button>
                    <Button className='ad' type="primary" onClick={this.onClickmatrixadd}> Add </Button>
                    <div>
                        <InputMultiple n={this.state.n} onChange={this.onChangematrixXY} value={this.state.matrixA} />
                        <div>
                            ค่า X1
                        </div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX1} value={this.state.valueX1} />
                        <div>
                            ค่า X2
                        </div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX2} value={this.state.valueX2} />
                        <div>
                            ค่า X3
                        </div>
                        <Input className="matrixip" style={{ width: '150px' }} placeholder='Example = 40000' onChange={this.onChangeX3} value={this.state.valueX3} />
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

export default Multiple