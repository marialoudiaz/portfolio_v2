import React, { useState, useEffect} from 'react'
import '../App.scss';

function Competences() {

 const textsArray = ['autoentrepreneur.ses','idéalistes','créatif.ves','rêveur.ses','passionné.es']
  const [buttonText, setButtonText] = useState(textsArray[0]); // Texte initial du bouton
  const [scrollPosition, setScrollPosition] = useState(0);
  const words=['identité de marque','site web', 'application mobile','illustration','typographie'];



  useEffect(() => {
    const containerWidth = document.querySelector('.scrolling-banner').offsetWidth;
    const textContainer = document.querySelector('.text-container');
    const textWidth = textContainer.offsetWidth;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - 1;
        if (newPosition <= -textWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 10);

    // Mettre à jour le texte du bouton toutes les 2 secondes
    const textChangeInterval = setInterval(() => {
      setButtonText((prevButtonText) => {
        const currentIndex = textsArray.indexOf(prevButtonText);
        const nextIndex = (currentIndex + 1) % textsArray.length;
        return textsArray[nextIndex];
      });
    }, 3000);

    return () => {
      clearInterval(scrollInterval);
      clearInterval(textChangeInterval);
    };
  }, []);



  return (
    <>
      <section>
        <div className='flex-wrap'>
          <div style={{position:'relative'}}>
          <h1>pour les</h1>
          <div className='rolling-btn'>{buttonText}</div>
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