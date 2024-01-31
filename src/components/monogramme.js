import '../App.scss';
import Logo from '../assets/logo.png';

const Monogramme = () => (
  <div className='Conteneur'>
    <div className='Roue'>
      <img className='logo' src={Logo} alt='logo'/>
      <div className='TexteCurviligne'>Contact</div>
    </div>
  </div>
);

export default Monogramme;
