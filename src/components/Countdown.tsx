import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown(){

    const{
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    // minha gambiarra para reeiniciar o contador(funcionou xD)
    // useEffect(() => {
    //     if(reiniciarCountdown){
    //         setHasFinished(false);
    //         resetCountdown();
    //         reiniciarCount();
    //     }
    // }, [reiniciarCountdown]);

    return(
        <div>
            <div className = {styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished? (
               <button 
                    disabled
                    className = {styles.countdownButton}
                >
                    Ciclo encerrado <img src="icons/checked.ico" alt="checked_icon"/>
                </button>
            ): (
                <>
                    
                    { isActive ? (
                        <button 
                            type="button" 
                            className = {`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick = {resetCountdown}
                        >
                            Abandonar ciclo <img src="icons/botao-fechar.svg" alt="fechar_icon"/>
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className = {styles.countdownButton}
                            onClick = {startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                        )
                    }
                </>
            )}

        </div>
    );
}