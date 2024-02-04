import '../App.scss';
import Logo from '../assets/logo.png';

const Monogramme = () => {

  const contact=['contact','contact','contact','contact'];

  return(
    <div className='Conteneur' style={{position:'fixed', top:'80vh', left:'90vw'}}>
    <div className='Roue'>
      <img className='logo-roue' src={Logo} alt='logo'/>
      <div className='TexteCurviligne'>{contact}</div>
    </div>
  </div>

  )
  
  };

export default Monogramme;
