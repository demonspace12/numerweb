import React from 'react'

import { Button, Input } from 'antd';
import { Row, Col } from 'antd';
import { InputMultiple } from './matrix/input_matrix'
import { calMultiple,copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'

class Multiple extends React.Component {
    state = {
        n:0,
        m:0,
        valueX1: "",
        valueX2: "",
        valueX3: "",
        matrixA: [],
        isModalVisible: false,
        apiData: [],
        hasData: false,
        Ex:2

    }
    async getData()
    {
        let tempData = null
        await apis.getRegession().then(res => {tempData = res.data})
        this.setState({apiData: tempData})
        this.setState({hasData: true})
        this.onClickInsert()
        
    }

   

    onClickInsert(){
        let index = this.state.Ex
            this.setState({
                matrixA: copyArray(this.state.apiData[index]["n"],this.state.apiData[index]["matrixA"]),
                n: this.state.apiData[index]["n"],
                valueX1: this.state.apiData[index]["x1"],
                valueX2: this.state.apiData[index]["x2"],
                valueX3: this.state.apiData[index]["x3"],
               
            })
    }

    onClickExample = e =>{
        if(!this.state.hasData){
            this.getData()
        }
        
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

        this.setState({ data: calMultiple(this.state.n, this.state.matrixA, this.state.valueX1, this.state.valueX2, this.state.valueX3) })

    }
    render() {

        return (

            <div>
                 
                <div className='box'>
                    <h1 className="bisechead">Multi-linear Regression</h1>

                    <Input className='sizeshow' onChange={this.oncreate} value={this.state.m} />
                    <Button className='button1' onClick={this.onClickcreate}>Create</Button><br/>
                    <span>X1 :</span><span className='margin'>X2 :</span><span className='margin'>X3:</span><span className='margin'>Y :</span>
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

export default Multiple