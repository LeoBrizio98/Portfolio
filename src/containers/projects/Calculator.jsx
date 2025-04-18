import Layout from '../../hocs/Layout';
import Button from '../../components/calculator/Button';
import ButtonClear from '../../components/calculator/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import '../../styles/projects.css';


const Calculator = () => {

    const [input, setInput] = useState('');

    const addInput = val => {
        setInput(input + val);
    };

    const calcResult = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert("Por favor ingrese valores para realizar los cálculos");
        }
    };

    return (
        <Layout>
            <div className='container-calculator'>
                <div className='contain-calculator'>
                    <div className='input'>
                        {input}
                    </div>
                    <div className='row'>
                        <Button driveClick={addInput}>7</Button>
                        <Button driveClick={addInput}>8</Button>
                        <Button driveClick={addInput}>9</Button>
                        <Button driveClick={addInput}>/</Button>
                    </div>
                    <div className='row'>
                        <Button driveClick={addInput}>4</Button>
                        <Button driveClick={addInput}>5</Button>
                        <Button driveClick={addInput}>6</Button>
                        <Button driveClick={addInput}>*</Button>
                    </div>
                    <div className='row'>
                        <Button driveClick={addInput}>1</Button>
                        <Button driveClick={addInput}>2</Button>
                        <Button driveClick={addInput}>3</Button>
                        <Button driveClick={addInput}>-</Button>
                    </div>
                    <div className='row'>
                        <Button driveClick={addInput}>0</Button>
                        <Button driveClick={addInput}>.</Button>
                        <Button driveClick={calcResult}>=</Button>
                        <Button driveClick={addInput}>+</Button>
                    </div>
                    <div className='row'>
                        <ButtonClear driveClear={() => setInput('')}>
                            Clear
                        </ButtonClear>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Calculator;