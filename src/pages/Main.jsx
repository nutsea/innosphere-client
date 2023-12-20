import React from 'react';
import '../styles/main.scss'

import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'

const Main = () => {
    return (
        <section className='ContentContainer'>
            <div className='MainTop'>
                <h1 className='MainSub'>Научно-развивающий центр «Инносфера»</h1>
                <div className='MainContacts'>
                    <div className='MContact'>
                        <img src={location} alt="Локация" />
                        <p>г. Альметьевск, ул. Белоглазова 20</p>
                    </div>
                    <div className="MContact">
                        <img src={phone} alt="Телефон" />
                        <p>+7 (999) 999-99-99</p>
                    </div>
                </div>
            </div>
            <div className='MainPhotoContainer'>
                <div className='MainPhoto'></div>
                <div className='MainInfo'>
                    <h3>Научно-развивающий центр</h3>
                    <ul>
                        <li>Для детей от 2 лет</li>
                        <li>Индивидуальные и групповые развивающие занятия</li>
                        <li>Интенсивы</li>
                        <li>Конкурсы</li>
                    </ul>
                    <button>Получить консультацию</button>
                </div>
            </div>
            <div className='MainDirector'>
                <h3>Директор Кузнецова Ландыш Айратовна</h3>
                <div className='DirectorInfo'>
                    <div className='DirectorPhoto'></div>
                    <div className='DirectorText'>
                        <p>Дорогие посетители нашего сайта, добро пожаловать в развивающий центр "Инносфера"! Мы осознаем, как трудно найти надежных специалистов для работы с неговорящими детьми, детьми с ОВЗ, РАС, ОНР, ЗПР и аналогичными особенностями. Именно поэтому мы приглашаем вас познакомиться с нашим центром, основанным на принципах нейропсихологии, нейропедагогики, логопедии, дефектологии и психологии.</p>
                        <p>Наши специалисты готовы предложить свои услуги в помощь для Вас и ваших детей с нестандартными подходами и авторскими программами для каждого ребёнка. Наша команда специалистов горит искренним интересом к своей профессии и всегда стремится к самосовершенствованию.</p>
                        <p>Мы рады вам предложить нашу экспертизу и поддержку. Ждем с нетерпением возможности помочь вам и вашим детям на их пути к развитию и самореализации.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Main;