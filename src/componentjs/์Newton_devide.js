import React from 'react'

import { Button, Input } from 'antd';
import { InputXY } from './matrix/input_matrix'
import { calNewtondevide } from './Rootcal'



class Newton_devide extends React.Component {
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
    matrixadd = (e) => {
        if (this.state.n < 10) {
            this.setState({ n: this.state.n += 1 })
            this.state.matrixA.push([])
        }
    }
    matrixdel = (e) => {
        if (this.state.n > 2) {
            this.setState({ n: this.state.n -= 1 })
            this.state.matrixA.pop([])
        }
    }
    Calculate = (e) => {
        this.setState({ data: calNewtondevide(this.state.matrixA, this.state.Point, this.state.valueX) })
    }
    render() {

        return (
            <div >
                <div className='box'>
                    
                    <h1 className="bisechead">Newton's divided-differences</h1>
                    <Button className='ad' type="primary" onClick={this.matrixdel}> Delete </Button>
                    <Button className='ad' type="primary" onClick={this.matrixadd}> Add </Button>
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
                        <br/>
                        <Button size="large" className='button1' type="primary" onClick={this.Calculate}>คำนวณ</Button>
                    </div>
                   
                    <div>
                        <table>
                        {this.state.data}
                        </table>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Newton_devide