import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';

import '../css/bisection_design.css'

class One_point extends React.Component {
    render() {
        return (
           
            <div>
                <h2 className='bisechead'>One-point iteration</h2>
                <div>
                    <Input placeholder="Basic usage" className="gg" />
                </div>
                <div>
                <Input placeholder="Basic usage" className="gg" />
                <Input placeholder="Basic usage" className="gg" />
                <Input placeholder="Basic usage" className="gg" /><br />
                <Button size="large" type="primary" className="button1">คำนวน</Button>
                </div>
            </div>

        );
    }
}
export default One_point