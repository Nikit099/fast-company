import React, { useState } from 'react'

function Bookmark() {
    const [bookmark, setBookmark] = useState(false)
    const handleBookmark = () => {
    setBookmark(!bookmark)
    }
    return (
        <button onClick={handleBookmark}>{
        bookmark 
        ? 
        <h4><i class="bi bi-bookmark-check"></i></h4>
        :
         <h4><i className="bi bi-bookmark"></i></h4> 
        }
        </button>
       
    )
}

export default Bookmark
