import React from 'react'

import { Button, Input } from 'antd';
import { MatrixInputA, MatrixInputB } from './matrix/input_matrix'
import { calConjugate,copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'
import Modal_Example from '../model/model'

class Conjugate extends React.Component {
    state =
        {
            n: 2,
            matrixA: [[], []],
            matrixB: [],
            result: "",
            isModalVisible: false,
            apiData: [],
            hasData: false
        }
        async getData()
        {
            let tempData = null
            await apis.getmatrix().then(res => {tempData = res.data})
            this.setState({apiData: tempData})
            this.setState({hasData: true})
            /* console.log(tempData); */
        }
    
        onClickOk = e =>{
            this.setState({isModalVisible: false})
        }
    
        onClickInsert = e =>{
    /*         console.log(e.currentTarget);
            console.log(e.target);
            console.log(e.currentTarget.getAttribute('name'));
            console.log(e.target.name); */
            let index = e.currentTarget.getAttribute('name').split('_')
                index = parseInt(index[1])
                this.setState({
                    matrixA: copyArray(this.state.apiData[index]["n"],this.state.apiData[index]["matrixA"]),
                    matrixB: [...this.state.apiData[index]["matrixB"]],
                    n: this.state.apiData[index]["n"],
                    ERROR : this.state.apiData[index]["error"],
                    isModalVisible: false
                })
        }
    
        onClickExample = e =>{
            if(!this.state.hasData){
                this.getData()
            }
            this.setState({isModalVisible: true})
        }
    getERROR = e => {
        this.setState({
            ERROR: e.target.value,
        });
    }
    OnChangeMatrixA = e => {
        let changedArr = this.state.matrixA
        let index = e.target.name.split('_')
        changedArr[parseInt(index[1])][parseInt(index[2])] = e.target.value
        console.log(e.target.value)
        this.setState({ matrixA: changedArr })
    }

    OnChangeMatrixB = e => {
        let changedArr = this.state.matrixB
        let index = e.target.name.split('_')
        changedArr[parseInt(index[1])] = e.target.value
        console.log(e.target.value)
        this.setState({ matrixB: changedArr })
    }

    onClickAdd = e => {
        if (this.state.n < 6) {
            this.state.matrixA.push([])
            this.setState({ n: this.state.n + 1 })
        }
    }

    onClickDel = e => {
        if (this.state.n > 2) {
            this.state.matrixA.pop()
            this.setState({ n: this.state.n - 1 })
        }
    }

    onPoom = e => {
        this.setState({
            result: calConjugate(this.state.n, this.state.matrixA, this.state.matrixB, this.state.ERROR)

        });
    }
    render() {

        return (
            <div>
                <Modal_Example
                    visible = {this.state.isModalVisible}
                    onOk = {this.onClickOk}
                    hasData = {this.state.hasData}
                    apiData = {this.state.apiData}
                    onClick = {this.onClickInsert}
                />

                <div className='box'>
                    <h1 className='bisechead'>Conjugate</h1>
                    <div>
                        <div>
                            <Button onClick={this.onClickDel} >Del</Button>
                            <Input className='sizeshow' value={this.state.n} />

                            <Button onClick={this.onClickAdd}>Add</Button>
                            <div className='flex'>
                                <div>
                                    <div className='top'>matrixB</div>

                                    <MatrixInputA n={this.state.n} onChange={this.OnChangeMatrixA} value={this.state.matrixA} />
                                </div>
                                <div className='setmatrix'>
                                    <div className='top'>matrixB</div>

                                    <MatrixInputB n={this.state.n} onChange={this.OnChangeMatrixB} value={this.state.matrixB} />
                                </div>
                            </div>
                        ERROR :
                        <span><Input placeholder="0.000001" onChange={this.getERROR} className="Input_3" value={this.state.ERROR} required /></span>
                            <span><Button size="large" className='button1' type="primary" onClick={this.onPoom}>คำนวณ</Button></span>
                            <Button size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                            <div>
                                <table className='table'>{this.state.result}</table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );


    }
}
export default Conjugate