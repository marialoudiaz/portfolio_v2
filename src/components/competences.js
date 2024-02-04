import React, { useState} from 'react'
import '../App.scss';

function Competences() {

  const banner=['identité de marque','site web', 'application mobile','illustration','typographie'];

  return (
    <>
      <section>
        <div className='flex-wrap'>
          <div>
          <h1>pour vous</h1>
          <h1 style={{marginTop:'-1rem'}}>je réalise</h1>
          </div>
          <div className='banner'>{banner}</div>
          <div className='banner'>{banner}</div>
        </div>
      </section>
    </>
  )

}

export default Competences