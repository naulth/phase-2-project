import React from 'react'


function SearchGames({changeSearch}) {

  const handleSearch = e => changeSearch(e.target.value)

  return (
    <div>
      <input className="search"
        type="text"
        placeholder='Search'
        onChange={handleSearch}
      />  
    </div>
  )
}

export default SearchGames