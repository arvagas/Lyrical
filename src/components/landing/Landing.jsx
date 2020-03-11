// library imports
import React, { useState } from 'react'
// component imports

const Landing = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState()

  const handleChange = (e) => {
    let { value } = e.target
    setQuery(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // search for input via youtube api
      // create search
    let url = new URL('https://www.googleapis.com/youtube/v3/search')
    url.search = new URLSearchParams({
      part: 'snippet',
      q: query,
      maxResults: 5,
      key: process.env.REACT_APP_YOUTUBE_API_KEY
    })
      // execute search
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setResults(res.items)
      setQuery('')
    })
  }

  return (
    <div>
      {console.log(results)}
      <label>
        Search
        <input type='text' name='search' value={query} onChange={(e) => handleChange(e)} placeholder='Artist, Song' />
      </label>
      <button type='submit' onClick={(e) => onSubmit(e)}>Search</button>

      {results && results.map(result => (
        <div>
          {result}
        </div>
      ))}
    </div>
  )
}

export default Landing