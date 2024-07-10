import { Fragment, useState, useRef } from "react"
import classes from "./ButtonModal.module.css"
import upArrow from '../../assets/img/caret-flecha-hacia-arriba.png'
import downArrow from '../../assets/img/caret-abajo.png'
import close from '../../assets/img/cerrar.png'
import closeRed from '../../assets/img/cerrar(rojo).png'
import { useSecondStart,useTimeSetByUser, useFixingTime, useCurrentLanguage, useSeconds, useTriggeredFixingTime } from "../../context/context"
import { useTransition, animated } from 'react-spring'
import { useTranslator } from "../translator/translator"

export const ButtonModal = () => {
    
    const [ fixingTimer , setFixingTimer] = useFixingTime()
    const [ value1, setValue1] = useState("3")
    const [ value2, setValue2] = useState("0")
    const [ value3, setValue3] = useState("0")
    const [ value4, setValue4] = useState("0")
    const [ secondsRestart , setSecondsRestart ] = useSecondStart()
    const [ seconds, setSeconds] = useSeconds()
    const [ timeSetByUser , setTimeSetByUser ] = useTimeSetByUser()
    const [ currentLanguage, setCurrentLanguage ] = useCurrentLanguage()
    const [ triggeredFixingTime, setTriggeredFixingTime] = useTriggeredFixingTime()
    const  modalContentStyle = useRef(null)


    const setTimer = () => {
        const minutesValue = parseInt(value1.toString() + value2.toString()) * 60
        const secondsValue = parseInt(value3.toString() + value4.toString())
        setSecondsRestart(minutesValue + secondsValue)
        setSeconds(minutesValue + secondsValue)
        setTimeSetByUser(true)
        setFixingTimer(false)
        setTriggeredFixingTime(!triggeredFixingTime)
        localStorage.setItem("seconds", minutesValue + secondsValue)

    }

    const secondsConverter = () => {
      return (parseInt(value1.toString() + value2.toString()) * 60)+ parseInt(value3.toString() + value4.toString())
    }

    const setTimerTransition = useTransition( fixingTimer, {
      from: { opacity: 0},
      enter: { opacity: 1},
      leave: { opacity: 0},
      config: { duration: 500 }
    })

    const setBoxTimerTransition = useTransition( fixingTimer, {
      from: { x: -195, y: -175},
      enter: { x: -195, y: -125},
      leave: { x: -195, y: -150},
      config: { duration: 500 }
    })

    const handleValidation = () => {
        let data = event.target.value
        {/* 
        if(isMinutes) {
          if( data == "6" || data == "7" || data == "8" ||
            data == "9") {
              data = "0"
              minuteInput.current.value = "0"
            }
        }
*/}
        if(data == "0" || data == "1" || data == "2" ||
           data == "3" || data == "4" || data == "5" ||
           data == "6" || data == "7" || data == "8" ||
           data == "9" ) {
            setNewValue(event.target.id, data)
           }
    }

    const SummingCounter = (id, maxUnit , data) => {
      let newData = parseInt(data)
      if(data < maxUnit) {
        newData = newData + 1
      } else {
        newData = 0
      }
      setNewValue(id,newData)
    }

    const SubstractCounter = (id, maxUnit , data) => {
      let newData = parseInt(data)
      if(data > 0) {
        newData = newData - 1
      } else {
        newData = maxUnit
      }
      setNewValue(id,newData)
    }

    const setNewValue = (id, newValue) => {
      if(id == "hours") {
        setValue1(newValue)
        return
      } 
      if (id == "hour") {
        setValue2(newValue)
        return
      }

      if (id == "minutes") {
        setValue3(newValue)
        return
      }
      
      if( id == "seconds") {
        setValue4(newValue)
      }

    }

    return (
      <Fragment>
        {setTimerTransition((style,item) => 
          item ?
        <animated.div id="ButtonModal" style= {style} className={`${classes.modal}`}>
         <div id="overlay" className={`${classes.overlay}`}></div>
         {setBoxTimerTransition((style,item) => item ? 
         <animated.div id="Content" style={style} className={`${classes.modalContent}`}>
           <h2 className={`${classes.text}`}>{useTranslator(currentLanguage.name,"Set Time")}</h2>
           <span className={`${classes.closeModal}`}
                 onClick={() => setFixingTimer(!useFixingTime)}><img src={close} alt="X" className={`${classes.x}`}/><img src={closeRed} alt="X" className={`${classes.xRojo}`}/></span>
           <div className={`${classes.content}`}>
            <div>
              <img alt="Arrow up" src={upArrow} onClick={() => SummingCounter("hours",9,value1)}/>
              <input id="hours" maxLength={1} value={value1} onChange={handleValidation}/>
              <img alt="Arrow down" src={downArrow} onClick={() => SubstractCounter("hours",9,value1)}/>
            </div>
            <div>
              <img alt="Arrow up" src={upArrow} onClick={() => SummingCounter("hour",9,value2)}/>
              <input id="hour" maxLength={1} value={value2} onChange={handleValidation}/>
              <img alt="Arrow down" src={downArrow} onClick={() => SubstractCounter("hour",9,value2)}/>
            </div>
            <div className={`${classes.twoPoints}`}>:</div>
             <div>
               <img alt="Arrow up" src={upArrow} onClick={() => SummingCounter("minutes",5,value3)}/>
               <input id="minutes" maxLength={1} value={value3} onChange={handleValidation}/>
               <img alt="Arrow down" src={downArrow} onClick={() => SubstractCounter("minutes",5,value3)}/>
             </div>
             <div>
               <img alt="Arrow up" src={upArrow} onClick={() => SummingCounter("seconds",9,value4)}/>
               <input id="seconds" maxLength={1} value={value4} onChange={handleValidation}/>
               <img alt="Arrow down" src={downArrow} onClick={() => SubstractCounter("seconds",9,value4)}/>
             </div>
            </div>
            <button onClick={setTimer}> {useTranslator(currentLanguage.name,"Accept")} </button>         
         </animated.div>
         :'')}
        </animated.div>
        : '')}

      </Fragment>

        )
}
