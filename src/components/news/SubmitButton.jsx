import React from 'react';

const SubmitButton = ({submit,formValid,className,text}) => {
    if(submit ===false){
        return <button onClick={formValid} type="submit" className={className}>{text}</button>
    }else{
        return <button disabled={true} className={className} ><div className="spinner-border spinner-border-sm"></div>Processing....</button>
    }
};

export default SubmitButton;