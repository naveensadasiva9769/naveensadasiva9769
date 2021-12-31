import React from 'react'

export default function StateInFunctionalComponent() {
    let [name,updateName]=React.useState("Naveen");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Naveen N")}}
            onMouseLeave={()=>{updateName("naveen")}}>
                {name}
            </h1>
        </div>
    )
}
