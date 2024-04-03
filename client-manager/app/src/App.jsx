/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    //Array Destructuring
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // 2da posición: función que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("")

    // Lo que ejecuta la función
    return (
    <main className='react-calculator'>
        <Result value={stack}/>
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`)
        }} />
        <Functions 
            onContentClear={
                () => { 
                    console.log("Click on clear")
                    setStack()
                }
            }
            onDelete={
                () => {
                    const newStack = stack.substring(0, stack.length - 1)
                    console.log("On Delete: ", )
                    setStack(newStack)
                }
            } />
        <MathOperations 
            onClickOperation={
                operation => {
                    if(stack.length >0) {
                        console.log("operation:", operation)
                        setStack(`${stack}${operation}`)
                    }
                }
            }
            onClickEqual={
                equal => {
                    console.log("equal:", equal)
                    setStack(eval(stack).toString())
                }
            } />
    </main>)
}

export default App