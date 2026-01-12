import React from 'react'

function Hero({ arrObj }) {
    return (
      <>
            {arrObj.map((items, index) => {
                return (
                    <>
                    <h1>First Name: {items.firstName}</h1>
                    </>
                )
        })}
       
      </>
    );
}

export default Hero