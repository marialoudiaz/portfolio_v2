  import '../App.scss';
  import Logo from '../assets/logo.png'
  
  
  const Footer = () => (
    <div className='footer-container'>
      <div className='footer'>
        <img className='logo' src={Logo} alt='logo'/>
        <p><svg style={{marginRight:'15px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ffa1f5'><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>ACTUELLEMENT SUR MONTPELLIER, FR</p>
        <p className='display'>DISPONIBLE POUR DE NOUVEAUX PROJETS</p>
        <p>CONTACT</p>
      </div>
   </div>
  )
  
  export default Footer