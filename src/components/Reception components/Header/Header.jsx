import { Link } from 'react-router-dom';
import headerLogo from 'src/logos/buildings.svg'
import 'src/components/Reception components/Header/header.scss'

const Header = () => {
  return (
    <div>
      <header>
        <img className='reception_header__logo' src={headerLogo} alt='' />
        <h1 className='reception_header__name'>Приемы</h1>
        <Link to='/login' className='reception_header__logout'>Выход</Link>
      </header>
    </div>
  )
}
