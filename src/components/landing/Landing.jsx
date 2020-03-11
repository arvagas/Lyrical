// library imports
import React, { useState } from 'react'
// component imports

const Landing = () => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    let { value } = e.target
    setQuery(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // search for input via youtube api
  }

  return (
    <>
      <div>
        <label>
          Search
          <input type='text' name='search' value={query} onChange={(e) => handleChange(e)} placeholder='Artist, Song' />
        </label>
        <button type='submit' onClick={(e) => onSubmit(e)}>Search</button>
      </div>
    </>
  )
}

export default Landing