import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

const Links = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const headerFirst = ['I', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', ' ']
    const headerSecond = ['L', 'i', 'n', 'k', 's']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 5000);
    }, []);

    return (
        <>
        <div className='container links-page' >
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters idx={15} 
                letterClass={letterClass}
                strArray={headerFirst} />
                    <AnimatedLetters idx={25} 
                    letterClass={letterClass}
                    strArray={headerSecond} />
                </h1>
            </div>

            <div className='link-box'>
                <div className='tile github'>
                    <FontAwesomeIcon icon={faSquareGithub} className='icon'/>
                    <h3><a target='_blank' rel='noreferrer' href='https://github.com/AlexMorrow239'>Github</a></h3>
                </div>
                <div className='tile linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                    <h3><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alex-morrow-62a1532a4/'>LinkedIn</a></h3>
                </div>
                <div className='tile instagram'>
                    <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    <h3><a target='_blank' rel='noreferrer' href='https://www.instagram.com/alexmorrow239/'>Instagram</a></h3>
                </div>
                <div className='tile telephone'>
                    <FontAwesomeIcon icon={faSquarePhone} className='icon'/>
                    <h3><a href="tel:2395721352">239-572-1352</a></h3>
                </div>
                <div className='tile email'>
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='icon'/>
                    <h3><a href='mailto:alex.morrow239@gmail.com'>alex.morrow239@gmail.com</a></h3>
                </div>
            </div>
        </div>

        <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Links