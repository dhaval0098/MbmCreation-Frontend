import React from 'react'
export const ReverseString = ()=>{
    function reverseString(str){
        return str.split('').reverse().join('')
    }
    const str = "dhaval panchal"
    const reversed = reverseString(str)
    return(
        <div>
                <h2>{str} reversed form is {reversed}</h2>
        </div>
    )
}