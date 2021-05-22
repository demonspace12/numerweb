import React from 'react'

import { Button,Input } from 'antd';
import { Row, Col } from 'antd';
import { MatrixInputA, MatrixInputB } from './matrix/input_matrix'

import { Ludecompocal,copyArray } from './Rootcal'
import apis from '../api/index'
import '../css/Root.css'
import Modal_Example from '../model/model'

class Ludecom extends React.Component {
    state =
        {
            n: 2,
            matrixA: [[], []],
            matrixB: [],
            result: "",
            apiData: [],
            hasData: false,
            Ex:0
        }
        async getData()
        {
            let tempData = null
            await apis.getmatrix().then(res => {tempData = res.data})
            this.setState({apiData: tempData})
            this.setState({hasData: true})
            this.onClickInsert()
            
        }
    
        
    
        onClickInsert(){
   
            let index = this.state.Ex
                this.setState({
                     
                    matrixA: copyArray(this.state.apiData[index]["n"],this.state.apiData[index]["matrixA"]),
                    matrixB: [...this.state.apiData[index]["matrixB"]],
                    n: this.state.apiData[index]["n"],
                    isModalVisible: false
                })
        }
    
        onClickExample = e =>{
            if(!this.state.hasData){
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
            result: Ludecompocal(this.state.n,this.state.matrixA,this.state.matrixB)
           
        });
    }
    render() {

        return (
            <div>
                
                
                <div className='box'>
                <h1 className='bisechead'>Lu Decomposition</h1>
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
export default Ludecom