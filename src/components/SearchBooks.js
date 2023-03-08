import React from 'react'

function SearchBooks({changeSearch}) {

  const handleSearch = e => changeSearch(e.target.value)

  return (
    <div>
      <input 
        type="text"
        placeholder='Search'
        onChange={handleSearch}
      />  
    </div>
  )
}

export default SearchBooks