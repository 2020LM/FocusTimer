import { Fragment , useEffect } from "react";
import classes from './backgrounds.module.css'
import { useTranslator } from "../../../translator/translator";
import { useCurrentLanguage } from "../../../../context/context";
import { BackgroundByType } from "./backgroundByType";
import { useBackground } from "../../../../context/context";

export const Backgrounds = () => {

  const [ background, setBackground ] = useBackground()
  const [ currentLanguage, setCurrentLanguage ] = useCurrentLanguage()

  
  const selectImage = (img1 , img2) => {
      if(window.innerWidth >= 400) {
        return img1
      }
      return img2
  }

  useEffect(() => {
  }, [window.innerWidth])
  
  const setBackgroundImgage = (image) => {
    setBackground(image)
    localStorage.setItem("backgroundImage",JSON.stringify(image))
  }
    return (
        <Fragment>
           <div className={`${classes.bigContainer}`}>
             <h3>{useTranslator(currentLanguage.name,"Nature")}</h3>
               <BackgroundByType type="Nature"/>
             <h3>{useTranslator(currentLanguage.name,"Anime")}</h3>
               <BackgroundByType type="Anime"/>
            <h3>{useTranslator(currentLanguage.name,"Cafe")}</h3>
               <BackgroundByType type="Cafe"/>
            <h3>{useTranslator(currentLanguage.name,"Classical")}</h3>
               <BackgroundByType type="Classical"/>
            <h3>{useTranslator(currentLanguage.name,"Jazz")}</h3>
               <BackgroundByType type="Jazz"/>
            <h3>{useTranslator(currentLanguage.name,"Running")}</h3>
               <BackgroundByType type="Running"/>
            <h3>{useTranslator(currentLanguage.name,"Gradients")}</h3>
               <BackgroundByType type="Gradients"/>
            <h3>{useTranslator(currentLanguage.name,"Solid")}</h3>
               <BackgroundByType type="Solids"/>
          </div>
        </Fragment>
    )
}
