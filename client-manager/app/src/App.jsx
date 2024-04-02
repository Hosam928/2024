import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    // Lo que ejecuta la función
    return (
    <main className='react-calculator'>
        <Result value={"0"}/>
        <Numbers 
            onClickNumber = {
                number=>console.log("number:", number)
            }
        />
        <Functions 
            onContentClear={
                ()=>console.log("Click on clear")
            }
            onDelete={
                ()=>console.log("Click on delete")
            } />
        <MathOperations 
            onClickOperation={
                operation=>console.log("operation:", operation)
            }
            onClickEqual={
                equal=>console.log("equal:", equal)
            } />
    </main>)
}

export default App