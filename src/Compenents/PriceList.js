import React from 'react'

const PriceList = ({subtotal, total}) => {
    console.log(total)
  return (
    <div>
         <p className="md:text-2xl text-lg lg:text-3xl font-bold my-7 md:my-4">
            Cart totals
          </p>

          <div>
            <div className="grid md:grid-cols-6 grid-cols-3">
              <p className="font-bold">Subtotal</p>
              <p>
              {/* {getcart?.result?.cartItems === null && console.log('NULL')} */}
                {subtotal}
              </p>
            </div>
            <div className="bg-gray-300 w-full h-[1px] my-4"></div>

            <div className="grid md:grid-cols-6 grid-cols-3">
              <p className="font-bold">total</p>
              <p className="font-bold">
                {" "}
               
                {total}
              </p>
            </div>
            <div className="bg-gray-300 w-full h-[1px] my-4"></div>
          </div>
    </div>
  )
}

export default PriceList