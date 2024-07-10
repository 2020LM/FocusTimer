import { useState, useEffect, Fragment } from 'react';
import { useTimer } from 'react-timer-hook';
import classes from'./timer.module.css'
import { useCurrentLanguage, useSeconds, useCurrentAlarm, useFixingTime, useSecondStart, useTriggeredFixingTime } from '../../context/context';
import { ButtonModal } from '../ButtonModal/ButtonModal';
import { useTranslator } from '../translator/translator';

export const MyTimer = ({ expiryTimestamp })  => {

  const styleButtons = () => {
    if(window.innerWidth >= 525) {
      return ""
    }
    return `${classes.buttonBotton}`
  }

  const styleFixxingButtons = () => {
    if(window.innerWidth >= 400 && window.innerWidth <= 525) {
      return `${classes.fixxingTimerUp}`
    }
    return ""
  }

  
  const styleTexting = () => {
    if(window.innerWidth >= 525 && (window.innerWidth >= window.innerHeight * 1.05) && window.innerWidth <= 992) { 
      return `${classes.fixxingHorizontalSize}`
    }
    return ""
  }
  

  const [ initialSeconds, setInitialSeconds ] = useSeconds()
  const [ currentLanguage, setCurrentLanguage] = useCurrentLanguage()
  const [ currentAlarm, setCurrentAlarm ] = useCurrentAlarm()
  const [ fixingTimer , setFixingTimer ] = useFixingTime()
  const [ secondsRestart , setSecondsRestart ] = useSecondStart()
  const [ triggeredFixingTime, setTriggeredFixingTime] = useTriggeredFixingTime()
  const [ traditionalButton, setTraditionalButton ] = useState(styleButtons())
  const [ fixxingTexting, setFixxingTexting ] = useState(styleTexting())
  const [ fixxingTimer, setFixxingTimer ] = useState(styleFixxingButtons())

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const reestartTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + initialSeconds);
    restart(time)
    pause(time)
    document.title = "Timer"
  }

  const timeFormat = () => {

    if(totalSeconds >= 3600 ) {
      return ((hours * 60) + minutes)
    } else if ( minutes < 10) {
      return `0${minutes}`
    }
    return minutes

  }

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + secondsRestart);
    restart(time)
    pause(time)
    document.title = "Timer"
  }, [triggeredFixingTime])

  useEffect(() => {
    window.addEventListener('resize', function() {
      setTraditionalButton(styleButtons())
  });

  window.addEventListener('resize', function() {
    setFixxingTimer(styleFixxingButtons())
});

  }, [window.innerWidth])

  useEffect(() => {
    if(isRunning) {
    document.title = (timeFormat()) + ":" + (seconds < 10 ? `0${seconds}` : seconds) + " Timer" 
  }

  if(totalSeconds == 0 && minutes == 0 && seconds == 0) {
    document.title = "Timer"
    currentAlarm.audio.play()
  }

  },[totalSeconds])

  useEffect(() => {
    reestartTimer()
  }, [])


  return (
    <div className={`${classes.main}`}>
      <div className={`${fixxingTimer}`}>
      <h1>{useTranslator(currentLanguage.name,"Timer")}</h1>
      <div  className={`${classes.timer}`}>
       <span>{timeFormat()}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      </div>
      {window.innerWidth <= 525 && 
      <Fragment>
      <br />
      </Fragment>
      }
      
      { totalSeconds == 0 &&
        <h2 className={`${classes.colorfont, classes.done}`}>{useTranslator(currentLanguage.name,"Done!")}</h2>
      }
      <div className={`${classes.buttons} ${traditionalButton}`}>
      <button type="button" onClick={() => setFixingTimer(true)} className={"btn btn-outline-light"}>{useTranslator(currentLanguage.name,"Set Time")}</button>
      { totalSeconds > 0 &&
      <div>
      {!isRunning  && <button onClick={resume} type="button" className={"btn btn-outline-light"} >{useTranslator(currentLanguage.name,"Start Timer")}</button>}
      {isRunning && <button onClick={pause} type="button" className={"btn btn-outline-light"} >{useTranslator(currentLanguage.name,"Pause Timer")}</button>}
      </div>
    }
      <button onClick={() => { reestartTimer() }} type="button" className={ "btn btn-outline-light"} >{useTranslator(currentLanguage.name,"Restart Timer")}</button>
      <ButtonModal/>
      </div>
    </div>
  );
}
