import React from 'react'

const Filter = () => {
  return (
    <div className='mx-2 text-center my-2'>
      <button className='border mx-2 px-2 bg-slate-700 p-1 text-white font-semibold rounded-md my-1'>All</button>
      <button className='border mx-2 px-2 bg-slate-700 p-1 text-white font-semibold rounded-md my-1'>Men's Clothing</button>
      <button className='border mx-2 px-2 bg-slate-700 p-1 text-white font-semibold rounded-md my-1'>Jewelery</button>
      <button className='border mx-2 px-2 bg-slate-700 p-1 text-white font-semibold rounded-md my-1'>Electronics</button>
      <button className='border mx-2 px-2 bg-slate-700 p-1 text-white font-semibold rounded-md my-1'>Women's Clothing</button>
    </div>
  )
}

export default Filter
