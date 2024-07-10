import classes from "./sideBar.module.css";
import { useRightArrow , useCurrentLanguage } from "../../context/context";
import { Backgrounds } from "./SideBarOptions/backgrounds/backgrounds";
import { BackgroundSounds } from "./SideBarOptions/BackgroundSounds/backgroundSounds";
import { AlarmSound } from "./SideBarOptions/alarmSounds/alarmSounds";
import { LanguagueOptions } from "./SideBarOptions/languegueOptions/language";
import backgroundIcon from '../../assets/img/fondo.png'
import soundsIcon from '../../assets/img/musica.png'
import bell from '../../assets/img/campana.png'
import languagues from '../../assets/img/languages.png'
import { useTranslator } from "../translator/translator";
import { Fragment } from "react";
import right from '../../assets/img/icons8-derecha-24.png'

export const SideBarContent = () => {

    const [currentLanguage, setCurrentLanguage] = useCurrentLanguage()
    const [putOptions , setPutOptions ] = useRightArrow()

    return(
        <Fragment>

        <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <ul
            id="collapseExample1"
            className={`collapse show list-group list-group-flush ${classes.listItem}`}
          >
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                
                <div className="carousel-item active">
                <div>
              <li type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" onClick={() => setPutOptions(false)}>
                <a>
                <span href="#carouselExampleControls" role="button" data-slide="1"><img src={backgroundIcon} className={classes.optionIcon}></img> {useTranslator(currentLanguage.name, "Change Background")}</span>
                </a> 
                </li>

                <li type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" onClick={() => setPutOptions(false)}>
                <a>
                <span href="#carouselExampleControls" role="button" data-slide="2"><img src={bell} className={classes.optionIcon}></img>{useTranslator(currentLanguage.name, "Set Alarm")}</span>
                </a> 
                </li>

                <li type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" onClick={() => setPutOptions(false)}>
                <a>
                <span href="#carouselExampleControls" role="button" data-slide="3"><img src={soundsIcon} className={classes.optionIcon}></img> {useTranslator(currentLanguage.name, "Set Music")} </span>
                </a> 
                </li>

                <li type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" onClick={() => setPutOptions(false)}>
                <a>
                <span href="#carouselExampleControls" role="button" data-slide="4"><img src={languagues} className={classes.optionIcon}></img> {useTranslator(currentLanguage.name, "Set Language")}</span>
                </a> 
                </li>
                </div>
                </div>
                <div className="carousel-item">                        
                  <Backgrounds />
                </div>
                <div className="carousel-item">
                 <AlarmSound /> 
                </div>
                <div className="carousel-item">
                 <BackgroundSounds />  
                </div>
                <div className="carousel-item">
                 <LanguagueOptions />  
                </div>
               
              </div>   
            </div>
          </ul>
        </div>
      </div>
      </Fragment>
    )
}