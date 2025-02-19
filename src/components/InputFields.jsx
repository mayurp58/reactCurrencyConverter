import React from 'react'

function InputFields({
    currencyOptions,
    inputValueRef,
    fromCurrencyRef,
    toCurrencyRef,
    onCurrencyChange
}) {
  return (
    <div className='my-4 items-center w-1/2 mx-auto'>
        
        <div className='w-full'>
            <input ref={inputValueRef} type="number" className='w-full h-10 my-2 gap-1 border-slate-900 p-2 rounded bg-gray-100 outline-1 outline-gray-600' placeholder='Enter Value To Convert'  />
        </div>
        <div className='flex mx-auto'>
            <div className='md:w-1/3'>
                <select ref={fromCurrencyRef} className='w-full h-10 my-2 gap-1 border-slate-900 p-2 rounded bg-gray-100 outline-1 outline-gray-600' 
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                >
                    <option value="">Select</option>
                    {currencyOptions.map((cur)=>(<option key={cur}>{cur}</option>))}
                </select>
            </div>
            <div className='md:w-1/3 mx-2 content-center text-center'>To</div>
            <div className='md:w-1/3'>
                <select ref={toCurrencyRef} className='w-full h-10 my-2 gap-1 border-slate-900 p-2 rounded bg-gray-100 outline-1 outline-gray-600' 
                    
                >
                    <option value="">Select</option>
                    {currencyOptions.map((cur)=>(<option key={cur}>{cur}</option>))}
                </select>
            </div>
        </div>
    </div>
  )
}

export default InputFields