import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {config} from './apiconfig'
class Swagersee extends React.Component{

    render(){

        return(
            <div className='swager'>
                <SwaggerUI spec={config}  />
            </div>
        )
    }
}

export default Swagersee