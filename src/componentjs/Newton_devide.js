import React from 'react'
import { Button, Input } from 'antd';
import { InputXY } from './matrix/input_matrix'
import { calNewtondevide,copyArray } from './Rootcal'
import apis from '../api/index'
import Modal_Example from '../model/model'



class Newton_devide extends React.Component {
    state = {
        n: 2,
        matrixA: [[], []],
        Point: [],
        X: '',
        data: "",
        isModalVisible: false,
        apiData: [],
        hasData: false
    }
    async getData() {
        let tempData = null
        await apis.getInter().then(res => { tempData = res.data
        console.log(res.data) })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        
    }


    onClickOk = e => {
        this.setState({ isModalVisible: false })
    }

    onClickInsert = e => {
       
        let index = e.currentTarget.getAttribute('name').split('_')
        index = parseInt(index[1])
        this.setState({
            matrixA: copyArray(this.state.apiData[index]["n"], this.state.apiData[index]["matrixA"]),
            Point: [...this.state.apiData[index]["point"]],
            n: this.state.apiData[index]["n"],
            X: this.state.apiData[index]["x"],
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
                { X: e.target.value }
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
        this.setState({ data: calNewtondevide(this.state.matrixA, this.state.Point, this.state.X) })
    }
    render() {

        return (
            <div >
                <div className='box'>
                <Modal_Example
                    visible={this.state.isModalVisible}
                    onOk={this.onClickOk}
                    hasData={this.state.hasData}
                    apiData={this.state.apiData}
                    onClick={this.onClickInsert}
                />
                    
                    <h1 className="bisechead">Newton's divided-differences</h1>
                    <Button className='ad' type="primary" onClick={this.matrixdel}> Delete </Button>
                    <Button className='ad' type="primary" onClick={this.matrixadd}> Add </Button>
                    <div>
                        <InputXY n={this.state.n} onChange={this.onChangematrixXY} value={this.state.matrixA} />
                        <div>
                            ค่า X
                        </div>
                        <Input  placeholder='Example = 40000' onChange={this.onChangeX} value={this.state.X} />
                        <div>
                            ใส่จำนวนจุดที่ต้องการ
                        </div>
                        <Input  placeholder='Example = 1,2,3' onChange={this.onChangePoint} value={this.state.Point} />
                        <br/>
                        <Button size="large" className='button1' type="primary" onClick={this.Calculate}>คำนวณ</Button>
                        <Button  size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                    </div>
                   
                    <div>
                        <table className='table'>
                        {this.state.data}
                        </table>
                        
                    </div>
                </div>
            </div>
        )
    } 
}

export default Newton_devide