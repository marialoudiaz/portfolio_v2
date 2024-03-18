import '../App.scss';
import Logo from '../assets/projets/logo_header.png'


const Header = () => (
  <div className='header-container'>
      <div className='left-section'>maria lou diaz</div>
      <img className='logo' src={Logo} alt='logo'/>
      <div className='right-section'>
      <a href='#services'><p style={{fontFamily:'Syne-Bold', fontSize:'1rem'}}>menu</p></a>
        {/* <div className='flex-wrap'>
        <a href='#services'><p style={{fontFamily:'Syne-Bold', fontSize:'1rem'}}>services</p></a>
        <a href='#projets'><p style={{fontFamily:'Syne-Bold', fontSize:'1rem'}}>projets</p></a>
        <a href='#contact'><p style={{fontFamily:'Syne-Bold', fontSize:'1rem'}}>me contacter</p></a>
        </div> */}
      </div>
 </div>
)

export default Header
