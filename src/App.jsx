import './styles/base.scss'
import './styles/app.scss'

import logo from './assets/images/logo.png'
import AppRoutes from './AppRoutes';

function App() {
    return (
        <div className="App">
            <header className='AppHeader'>
                <nav className='HeaderNav'>
                    <div className='HeaderLogo'>
                        <img src={logo} alt="Логотип" />
                    </div>
                    <ul className='NavList'>
                        <li>О нас</li>
                        <li>Прайс-лист</li>
                        <li>Галерея</li>
                        <li>Конкурсы</li>
                        <li>Благотворительность</li>
                    </ul>
                </nav>
                <button className='HeaderFeedback'>Обратная связь</button>
            </header>
            <AppRoutes />
        </div>
    );
}

export default App;
