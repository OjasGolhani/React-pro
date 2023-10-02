import React, { useState } from "react";
import Datas from './Datas.json';

const Data=()=>{
    const[nData,setnData]= useState(Datas);

   const handleClick=()=>{
      setnData([]);
    }

    const handleRemove=(itemId)=>{
        setnData(nData.filter(item=> item.id!==itemId))
    }
    
    return(
        <div>
            <ul>
                {
                    nData.map(item=>
                        <li key={item.id}>
                            {item.name}

                            <button onClick={()=>
                            handleRemove(item.id)}>                      
                                Remove</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
}

export default Data;