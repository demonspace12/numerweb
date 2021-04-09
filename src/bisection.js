import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';

import './css/bisection_design.css'

class bisection extends React.Component{
    render(){
        return(
            <div>
                <Input placeholder="Basic usage" className ="gg"/>
                <Input placeholder="Basic usage" className ="gg"/><br/>
                <Input placeholder="Basic usage" className ="gg"/>
                <Input placeholder="Basic usage" className ="gg"/><br/>
                <Button size="large" type="primary" className="button1">คำนวน</Button>

                
            </div>
        );
    }
}
export default bisection