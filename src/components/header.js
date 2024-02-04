import '../App.scss';
import Logo from '../assets/logo_header.png'


const Header = () => (
  <div className='header-container'>
      <div className='left-section'>mld.</div>
      <img className='logo' src={Logo} alt='logo'/>
      <div className='right-section'>
        <div className='flex-wrap'>
        <a href='#services'><p style={{fontFamily:'Syne-Bold', fontSize:'1.5rem'}}>services</p></a>
        <a href='#projets'><p style={{fontFamily:'Syne-Bold', fontSize:'1.5rem'}}>projets</p></a>
        <a href='#contact'><p style={{fontFamily:'Syne-Bold', fontSize:'1.5rem'}}>me contacter</p></a>
        </div>
      </div>
 </div>
)

export default Header