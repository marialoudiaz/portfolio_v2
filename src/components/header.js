import '../App.scss';
import Logo from '../assets/logo_header.png'


const Header = () => (
  <div className='header-container'>
      <div className='left-section'>mld.</div>
      <img className='logo' src={Logo} alt='logo'/>
      <div className='right-section'>
        <div className='flex-wrap'>
          <p>services</p>
          <p>projets</p>
          <p>me contacter</p>
        </div>
      </div>
 </div>
)

export default Header