import { useState } from "react"


export default function SearchInput(){
  const [searchText, setSearchText] = useState('')
  return(
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="text" id="text"
        value={searchText}
        placeholder='Search for location'
        onChange={({ target }) => setSearchText(target.value)} />
      <button type="submit">
        search
      </button>
    </form>
  )
}