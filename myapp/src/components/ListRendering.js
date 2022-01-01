import React from 'react'

export default function ListRendering() {

    let emplist=[{
        name:"Naveen",
        salary:30000,
        email:"naveen@83"
    },
    {
        name:"suhel",
        salary:40000,
        email:"su@77"
    },
    {
        name:"Karthik",
        salary:38000,
        email:"ka@00"
    },
    {
        name:"chai",
        salary:50000,
        email:"chai@90"
    }
    ]
    return (
        <div>
            <h1> List Rendering</h1>
            {/* {
            emplist.map(element=>(
                <h1>{element}</h1>
            ))
            } */}
            {
            emplist.map(empdata=>
                <>
            
                <p>{empdata.name}</p>
                <p>{empdata.salary}</p>
                <p>{empdata.email}</p>
                </>
            )
            }
        </div>
    )
}
