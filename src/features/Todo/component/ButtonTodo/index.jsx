import React from 'react';
import PropTypes from 'prop-types';

ButonTodo.propTypes = {
    buttonTodo : PropTypes.string,
    onButtonFun : PropTypes.func,
};

function ButonTodo(props) {
    const {buttonTodo,onButtonFun} = props;
    const handleButtonClick = (index) =>{
        if(!onButtonFun)
        return;
        onButtonFun(index);


    }
    return (
        <div>
            <button onClick={()=> {handleButtonClick()}}>{buttonTodo}</button>
        </div>
    );
}

export default ButonTodo;