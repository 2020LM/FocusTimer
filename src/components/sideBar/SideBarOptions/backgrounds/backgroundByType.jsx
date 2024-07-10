import { useBackgroundImages, useBackground } from '../../../../context/context'
import { Fragment , useEffect , useState ,useRef} from "react";
import classes from './backgrounds.module.css'
import { Blurhash } from 'react-blurhash';

export const BackgroundByType = (props) => {

    const createReferences = (array) =>  {
        return array.map(item => useRef(null));
    }

    const [ backgroundImages, setBackgroundImages ] = useBackgroundImages()
    const [ background, setBackground ] = useBackground()
    const [ references, setReferences ] = useState(createReferences(backgroundImages))

    const setBackgroundAndAlternativeImages = (value, alternativeValue, index) => {

        if(window.innerWidth >= 525 && (window.innerWidth >= window.innerHeight * 1.05)) {
            setBackground(value)
        } else {
            setBackground(alternativeValue)
        }
        localStorage.setItem("backgroundImage", JSON.stringify(value))
        localStorage.setItem("backgroundAlternativeImage", JSON.stringify(alternativeValue))
        localStorage.setItem("indexBackgroundImage", JSON.stringify(index))
    }

    const updateBackgroundImages = (index,item,value) => {

        const updatedBackgroundImages = [...backgroundImages]

        if(item == "image") {
            updatedBackgroundImages[index].image = value
        } else if(item == "src") {
            updatedBackgroundImages[index].src = value
        } else if(item == "src2") {
            updatedBackgroundImages[index].src2 = value
        } else if(item == "isLoaded") {
            updatedBackgroundImages[index].isLoaded = value
        } else if(item == "type") {
            updatedBackgroundImages[index].type = value
        }
        setBackgroundImages(updatedBackgroundImages)

    }


    useEffect(()=>  {

        references.map((item,index) => {
            if(item.current != null) {
               item.current.onLoad = () => {
                updateBackgroundImages(index,"isLoaded",true)
              }
        }})
    }, [])

    return(
        <Fragment>
           <div className={`${classes.container}  m-3`}>
           {(window.innerWidth >= 525 && (window.innerWidth >= window.innerHeight * 1.05)) &&
           backgroundImages.map((item,index) => {
            if(item.type == props.type) {
               return(
                <div key={index} className={`${classes.fixxingMargins}`}>

                  <div style={{display: !backgroundImages[index].isLoaded ? 'block': 'none'}}>
                    <Blurhash width={68} height={60} hash={backgroundImages[index].hash1} />
                   </div>

                   <div style={{display: backgroundImages[index].isLoaded ? 'block': 'none'}}>
                    <span onClick={() => setBackgroundAndAlternativeImages(item.src, item.src2, index)}><img onLoad={() => updateBackgroundImages(index,"isLoaded",true)} ref={references[index]} src={item.src} alt={props.type} /></span>
                    </div>
                </div>
               ) 
            }
           })
        }

            {(window.innerWidth <= 525 || (window.innerWidth <= window.innerHeight * 1.05)) &&
           backgroundImages.map((item,index) => {
            if(item.type == props.type) {
                return(
                    <div key={index}>
    
                      <div style={{display: !backgroundImages[index].isLoaded ? 'block': 'none'}}>
                        <Blurhash width={68} height={60} hash={backgroundImages[index].hash1} />
                       </div>
                      
                       <div style={{display: backgroundImages[index].isLoaded ? 'block': 'none'}}>
                        <span onClick={() => setBackgroundAndAlternativeImages(item.src, item.src2)}><img onLoad={() => updateBackgroundImages(index,"isLoaded",true)} ref={references[index]} src={item.src2} alt={props.type} /></span>
                        </div>
                    </div>
                   )
            }
           })
        }
           </div>
        </Fragment>
    )
}
