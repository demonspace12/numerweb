import React from 'react'

import { Button,Input } from 'antd';
import {  Row ,Col  } from 'antd';
import {MatrixInputA,MatrixInputB} from './matrix/input_matrix'

import {Eliminationcal} from './Rootcal'

class Gauss_em extends React.Component {
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
            result: Eliminationcal(this.state.n, this.state.matrixA, this.state.matrixB)
        });
    }
    render() {

        return (
            <div>
                
                <div className='box'>
                <h1 className='bisechead'>Gauss-Eliminate</h1>
                    <div>
                        <Button onClick={this.onClickDel} >Del</Button>
                        <Input className='sizeshow' value = {this.state.n} />
                        <Button onClick={this.onClickAdd}>Add</Button>
                        <div className='flex'>
                            <div>
                            <div className='top'>matrixB</div>
                            
                            <MatrixInputA  n={this.state.n} onChange={this.OnChangeMatrixA} value={this.state.matrixA} />
                            </div>
                            <div className ='setmatrix'>
                                <div className='top'>matrixB</div>
                            
                            <MatrixInputB  n={this.state.n} onChange={this.OnChangeMatrixB} value={this.state.matrixB} />
                            </div>
                        </div>
                        <span><Button size="large" className='button1' type="primary" onClick={this.onPoom}>คำนวณ</Button></span>
                        <div>
                            {this.state.result}
                        </div>
                    </div>
                </div>

            </div>
        );


    }
}
export default Gauss_em