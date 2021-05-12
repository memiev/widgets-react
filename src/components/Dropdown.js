import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) =>{
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map( (option) => {
        
        if (option.value === selected.value){
            return null;
        }

        return(
        <div key={option.value} 
            className='item'
            onClick={ () => onSelectedChange(option)}
            > 
            {option.label}
        </div>
        );
    });

    return(
        <div className='ui form'>
            <div className='field'>
                <lebel className='lebel'> Select a Color</lebel>
                <div onClick={ () => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dropdown;