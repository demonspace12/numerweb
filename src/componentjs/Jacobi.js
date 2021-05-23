import React from 'react'

import { Button, Input } from 'antd';
import { Row, Col } from 'antd';
import { MatrixInputA, MatrixInputB } from './matrix/input_matrix'

import { Jacobical, copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'


class Jacobi extends React.Component {
    state =
        {
            n: 0,
            m:0,
            matrixA: [],

            matrixB: [],
            result: "",
            isModalVisible: false,
            apiData: [],
            hasData: false,
            Ex: 1
        }
    async getData() {
        let tempData = null
        await apis.getmatrix().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        this.setState({ hasData: true })
        this.onClickInsert()

    }



    onClickInsert() {
        let index = this.state.Ex
        this.setState({
            matrixA: copyArray(this.state.apiData[index]["n"], this.state.apiData[index]["matrixA"]),
            matrixB: [...this.state.apiData[index]["matrixB"]],
            n: this.state.apiData[index]["n"],
            ERROR: this.state.apiData[index]["error"],
            isModalVisible: false
        })
    }

    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }

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

    onPoom = e => {
        this.setState({
            result: Jacobical(this.state.n, this.state.matrixA, this.state.matrixB, this.state.ERROR)

        });
    }
    render() {

        return (
            <div>


                <div className='box'>
                    <h1 className='bisechead'>Jacobi</h1>
                    <div>
                        <Input className='sizeshow' onChange={this.oncreate} value={this.state.m} />
                        <Button className='button1' onClick={this.onClickcreate}>Create</Button>
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
                        <span><Input placeholder="0.000001" onChange={this.getERROR} className="Input_3" value={this.state.ERROR} /></span>
                        <span><Button size="large" className='button1' type="primary" onClick={this.onPoom}>คำนวณ</Button></span>
                        <Button size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                        <div>
                            <table className='table'>{this.state.result}</table>

                        </div>
                    </div>
                </div>

            </div>
        );


    }
}
export default Jacobi