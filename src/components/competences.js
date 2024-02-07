import React, { useState, useEffect} from 'react'
import '../App.scss';

function Competences() {

 const textsArray = ['autoentrepreneur.se','idéaliste','créatif.ve','rêveur.se','passionné.e']
  const [buttonText, setButtonText] = useState(textsArray[0]); // Texte initial du bouton
  const [index, setIndex] = React.useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleMouseEnter =()=>{
    const currentIndex = textsArray.indexOf(buttonText);
    const nextIndex = (currentIndex + 1)%textsArray.length;
    setButtonText(textsArray[nextIndex]);
  };

  useEffect(() => {
      const containerWidth = document.querySelector('.scrolling-banner').offsetWidth;
      const textContainer = document.querySelector('.text-container');
      const textWidth = textContainer.offsetWidth;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) =>{
        const newPosition = prevPosition -1;
        if (newPosition <= -textWidth){
          return 0;
        }
        return newPosition;
    });
  }, 10);
  return ()=> clearInterval(scrollInterval);
}, []);

  const words=['identité de marque','site web', 'application mobile','illustration','typographie'];

  return (
    <>
      <section>
        <div className='flex-wrap'>
          <div style={{position:'relative'}}>
          <h1>pour vous</h1>
          <h1 style={{marginTop:'-1rem'}}>je réalise</h1>
          <div className='rolling-btn' onMouseEnter={handleMouseEnter}>{buttonText}</div>
          <div className="scrolling-banner">
          <div className="text-container" style={{ transform: `translateX(${scrollPosition}px)` }}>
            {words.map((word, index) => (
              <div className="text" key={index}>
                {word}
              </div>
            ))}
      </div>
    </div>
    <div className="scrolling-banner2">
          <div className="text-container" style={{ transform: `translateX(${scrollPosition}px)` }}>
            {words.map((word, index) => (
              <div className="text" key={index}>
                {word}
              </div>
            ))}
      </div>
    </div>
          </div>

        </div>
      </section>
    </>
  )

}

export default Competences