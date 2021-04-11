import React from 'react'

import { Button } from 'antd';
import { Input } from 'antd';

class false_po extends React.Component{
    render(){
        return(
            <div>
                <h2>False-Position</h2>
                <div>
                    <Input placeholder="Basic usage" />
                </div>
                <div>
                <Input placeholder="Basic usage"  />
                <Input placeholder="Basic usage"  />
                <Input placeholder="Basic usage"  /><br />
                <Button size="large" type="primary" >คำนวน</Button>
                </div>
            </div>
        );
    }
}
export default false_po