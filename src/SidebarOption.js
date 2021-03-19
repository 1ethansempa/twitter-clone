import React from 'react'
import './SidebarOption.css'
import {Button} from '@material-ui/core'


{/*Componets are written with capital letters */}
function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
           <div>
            <Button className="sidebarOption__button">
                <Icon/>
                <h2>{text}</h2>
            </Button>
            </div>
          
            
           
            
        </div>
    )
}

export default SidebarOption
