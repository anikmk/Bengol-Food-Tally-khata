/* eslint-disable react/prop-types */


const Heading = ({heading,subHeading,center}) => {
    return (
        <>
         <div className={`py-8 ${center ? 'text-center':''}`}>
            <div>
            <h4 className="text-xl">{subHeading}</h4>
            <h2 className="lg:text-5xl md:text-4xl text-2xl">{heading}</h2>
            </div>
         </div>
        </>
    );
};

export default Heading;