import '../App.scss';
import Logo from '../assets/projets/logo.png';

const Monogramme = () => {

  const contact=['contact·'];

  return(
      <div className='Conteneur' style={{position:'fixed', top:'80vh', left:'85vw', width:'10vw', height:'15vh'}}>
      <a href='#contact'>
      <svg
       width="100%" 
       height="100%"
       viewBox="0 0 100 100"
       xmlns="http://www.w3.org/2000/svg"
       className='rotate-svg'
      >
        <path
          id="circlePath"
          d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
          fill='transparent'
        />
        <text>
          <textPath href="#circlePath">{new Array(4).fill(contact).join('')}</textPath>
        </text>
      </svg>
      <div className='logo-roue'>
       <img src={Logo} alt='logo'/>
      </div>
      </a>
      
  </div>

  )
  
  };

export default Monogramme;
// fill='transparent'