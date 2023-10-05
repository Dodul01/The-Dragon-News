import React, { useEffect, useState } from 'react'

const RightNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('./data/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div className='p-2 min-w-[280px]'>
      <h1 className='text-xl font-bold'>All Category</h1>
      <ul className='mt-3'>
        {categories.map((categorie)=>{
          return <li className='text-xl text-gray-500 p-1 hover:bg-gray-300 rounded cursor-pointer transition hover:text-black' key={categorie.id}>{categorie.name}</li>
        })}
      </ul>
    </div>
  )
}

export default RightNav
