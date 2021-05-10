import React from 'react'
import apis from '../api/index'
import { Button } from 'antd';
import { Input } from 'antd';
import { calBisection } from './Rootcal';
import '../css/Root.css'
import Modal_Example from '../model/model'




class Bisection extends React.Component {
    /* state = {
        XL: "1.5", XR: "2.0", ERROR: "0.000001", result: "", FX: "X^4-13"

    } */
    state = {
        FX:'',
        XL: '',
        XR: '',
        ERROR: '',
        result: '',
        isModalVisible: false,
        apiData: [],
        hasData: false,
    };

    async getData()
    {
        let tempData = null
        await apis.getRoot().then(res => {tempData = res.data})
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
                FX: this.state.apiData[index]["equation"],
                XL: this.state.apiData[index]["xl"],
                XR: this.state.apiData[index]["xr"],
                ERROR: this.state.apiData[index]["error"],
                isModalVisible: false
            })
    }
    onClickExample = e =>{
        if(!this.state.hasData){
            this.getData()
        }
        this.setState({isModalVisible: true})
    }


    getFX = e => {
        this.setState({
            FX: e.target.value,
        });
    }
    getXL = e => {
        this.setState({
            XL: e.target.value,
        });
    }
    getXR = e => {
        this.setState({
            XR: e.target.value,
        });
    }
    getERROR = e => {
        this.setState({
            ERROR: e.target.value,
        });
    }
    Calculate = e => {
        this.setState({
            result: calBisection(this.state.FX, this.state.XL, this.state.XR, this.state.ERROR)
        });
    }



    render() {
        return (

            <div className='color'>
               
                <div className='box'>
                    <div>
                    <Modal_Example
                    visible = {this.state.isModalVisible}
                    onOk = {this.onClickOk}
                    hasData = {this.state.hasData}
                    apiData = {this.state.apiData}
                    onClick = {this.onClickInsert}
                />
                    <h1 className='bisechead'>Bisection</h1>
                        <div>
                            
                            <span> FX :</span>
                            <span><Input className='data' placeholder="X^4-13" onChange={this.getFX} value = {this.state.FX} /></span><br />
                            <span> XL :</span><br />
                            <span><Input placeholder="1.5" className='data'  onChange={this.getXL} /></span><br />
                        </div>
                        <div>
                            <span> XR :</span><br />
                            <span><Input className='data' placeholder="2.0"  onChange={this.getXR} /></span><br />
                            <span> ERROR :</span><br />
                            <span><Input className='data' placeholder="0.000001"  onChange={this.getERROR} /></span><br />
                           
                        </div>
                        <div className='calculate'>
                            <span><Button  size="large" type="primary" className="button1" onClick={this.Calculate}>คำนวณ</Button></span>
                            <Button  size="large" type="primary" className="button1" onClick={this.onClickExample}>EX</Button>
                        </div>
                    </div>
                    <div className='result'>
                        <table>
                            
                            {this.state.result}
                            
                        </table>
                        
                    </div>
                </div>
                
            </div>

        );
    }
}
export default Bisection