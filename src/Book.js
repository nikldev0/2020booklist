import React, { useState } from 'react';

const Book = ({id, name, author, info, image, price, link, removeBook}) => {
  const [readMore, setReadMore] = useState(false)

    return (
      <article className="single-tour">
        <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={name}/></a>
        <footer>
          <div className="tour-info">
            <h1>{name}</h1>
            <h4 className="tour-price">£{price}</h4>
          </div>
          <h4>{author}</h4>
          <p>{readMore ? info : `${info.substring(0,200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? `show less` : `read more`}</button>
          </p>
          <button className="delete-btn" onClick={() => removeBook(id)}>Already Read it! / I'm not interested.</button>
        </footer>
      </article>
    )
}

export default Book;
