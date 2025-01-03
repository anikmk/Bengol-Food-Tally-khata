/* eslint-disable react/prop-types */

const Button = ({ btnText, backgroundColor, textColor }) => {

    return (
        <>
            <button className={`${backgroundColor ? `${backgroundColor}` : 'bg-black text-white'} ${textColor ? `${textColor}` : ''} py-2 px-4 rounded`}>

            {btnText}

            </button>
        </>
    );
};

export default Button;
