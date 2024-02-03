import '../App.scss';
import Logo from '../assets/logo_header.png'


const Header = () => (
  <div className='header-container'>
      <div className='left-section'>mld.</div>
      <img className='logo' src={Logo} alt='logo'/>
      <div className='right-section'>
        <div className='flex-wrap'>
        <a href='#services'><p>services</p></a>
        <a href='#projets'><p>projets</p></a>
        <a href='#contact'><p>me contacter</p></a>
        </div>
      </div>
 </div>
)

export default Header