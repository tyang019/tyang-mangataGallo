import miniLogo from '/src/assets/Asset 1@3x.png';

export default function Footer(){
  return(
     <footer>
        <div>
          <img className='mini_logo' src={miniLogo} alt='mini-logo' />
        </div>
          <hr/>
        <div>
          <p className="copyright">@Mangata Gallo Copyright</p>
        </div>
      </footer>
  )
}