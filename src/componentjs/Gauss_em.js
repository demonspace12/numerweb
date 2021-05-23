import React from 'react'

import { Button, Input } from 'antd';
import { MatrixInputA, MatrixInputB } from './matrix/input_matrix'

import { Eliminationcal, copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'
import Modal_Example from '../model/model'

class Gauss_em extends React.Component {
    state =
        {
            n: 0,
            m: 0,
            matrixA: [],
            matrixB: [],
            result: "",
            isModalVisible: false,
            apiData: [],
            hasData: false,
            Ex: 0
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
            matrixB: this.state.apiData[index]["matrixB"],
            n: this.state.apiData[index]["n"],


        })
    }

    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }


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
            result: Eliminationcal(this.state.n, this.state.matrixA, this.state.matrixB)
        });
    }
    render() {

        return (
            <div>



                <div className='box'>
                    <h1 className='bisechead'>Gauss-Eliminate</h1>
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
                        <span><Button size="large" className='button1' type="primary" onClick={this.onPoom}>คำนวณ</Button></span>
                        <Button size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>

                        <div>
                            <table className='table'>
                                {this.state.result}
                            </table>

                        </div>
                    </div>
                </div>

            </div>
        );


    }
}
export default Gauss_em