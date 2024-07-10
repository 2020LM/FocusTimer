import { Fragment, useState, useRef } from "react";
import { useSongsData, useCurrentSong , useVolumeMusic , useMutedMusic, useCurrentLanguage } from "../../../../context/context";
import { SongByType } from "./songByType";
import  classes  from "./backgroundSounds.module.css"
import volumeIcon from "../../../../assets/img/volumen/volumen.png"
import muted from "../../../../assets/img/volumen/mute.png"
import { useTranslator } from "../../../translator/translator";

export const BackgroundSounds = () => {

    const initializeAudioRef = (array) => {
        return array.map(item => useRef(null));
      };

    const [ songs , setSongs ] = useSongsData()
    const [ currentSong , setCurrentSong ] = useCurrentSong()
    const [ volumen, setVolumen ] = useVolumeMusic()
    const volumenBar = useRef(null)
    const [mute, setMute] = useMutedMusic()
    const [currentLanguage, setCurrentLanguage ] = useCurrentLanguage()



    const changeRepeat = (index) => {
        updateSong(index,"repeat",switchBooleanString(songs[index].repeat))
    }

    const switchBooleanString = (value) => {

        if(value == "true") {
            return "false"
        }
        return "true"
    }

    // Function to seek a specific time in the audio.
    const handleSeek = (index, event) => {

        if(event != undefined) {
            updateSong(index,"currentTime",event.target.value)
            references[index].current.currentTime = event.target.value

    }


        /*
        if(e != undefined || e != null) {
            alert("Hi!")
            updateSong(index, "currentTime",references[index].current.currentTime)
       //setCurrentTime(e.target.value)
    }*/
        
    }

    // Function to update the current time and duration of the audio
    const handleTimeUpdate = (index) => {
       updateSong(index, "currentTime",references[index].current.currentTime)
       updateSong(index, "duration",references[index].current.duration)
       //setDuration(audioRef.current.duration)
    }

    // Function to handle playing the audio.
    const handlePlay = (index) => {

        updateSong(index,"isPlaying","true")
        setCurrentSong(
            {
                ...currentSong,
                id: songs[index].id,
                isPlaying: songs[index].isPlaying,
                song: songs[index].song,
                duration: songs[index].duration,
                type: songs[index].type,
                currentTime: songs[index].currentTime,
                repeat: songs[index].repeat

            }
    )
 
        //references[index].current.play()
    }

    // Function to handle pausing the audio.
    const handlePuase = (index) => {
        updateSong(index,"isPlaying","false")
        setCurrentSong(
            {
                ...currentSong,
                isPlaying: "false"

            })
            references[index].current.pause()

    }

    const StringtoBoolean = (string) => {

        if(string == "true"){
            return true
        }
        return false
    }

    // Function to toggle between play and pause state.
    const handlePlayPause = (index) => {

        if(currentSong != {} && currentSong.isPlaying == "false" && (currentSong.id - 1) == index){
            handlePlay(index)
            return
        }

        if((currentSong.id - 1) != index){
            if(currentSong.isPlaying == "true") {
                handlePuase(currentSong.id-1)
            }
            handlePlay(index)
            return
        }


        if(currentSong.isPlaying == "true"){
            handlePuase(index)
                return

        }
        handlePlay(index)

    }

    // Function to format the duration of the audio in "mm:ss" format.
    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60)
        const seconds = Math.floor(durationSeconds % 60)
        const formattedSeconds = seconds.toString().padStart(2, "0")
        return `${minutes}:${formattedSeconds}`
    }

    const updateSong = (index, atribute, value) =>  {
        const updatedSongs = [...songs]

        if(atribute == "id") {
            updatedSongs[index].id = value
        } else if(atribute == "isPlaying") {
            updatedSongs[index].isPlaying = value
        } else if (atribute == "repeat") {
            updatedSongs[index].repeat = value
        } else if (atribute == "song") {
            updatedSongs[index].song = value
        } else if (atribute == "duration") {
            updatedSongs[index].duration = value
        } else if (atribute == "type") {
            updatedSongs[index].type = value
        } else if (atribute == "currentTime") {
            updatedSongs[index].currentTime = value
        }
   

       setSongs(updatedSongs)
    }


    return (
        <Fragment>
         <h3>{useTranslator(currentLanguage.name,"Sounds")}</h3>
            <h4>{useTranslator(currentLanguage.name,"Nature")}</h4> 
              <SongByType type="Nature" volume={volumen} mute={mute}/>
            <h4>{useTranslator(currentLanguage.name,"Cafe")}</h4> 
              <SongByType type="Cafe" volume={volumen} mute={mute}/>
            <h4>{useTranslator(currentLanguage.name,"Jazz")}</h4> 
              <SongByType type="Jazz" volume={volumen} mute={mute}/>
            <h4>{useTranslator(currentLanguage.name,"Classical")}</h4>
              <SongByType type="Classical" volume={volumen} mute={mute}/>
            <h4>{useTranslator(currentLanguage.name,"Running")}</h4>
              <SongByType type="Running" volume={volumen} mute={mute}/>

            <div className={classes.volumenStyle}>
            {mute ? <span> <img className={classes.volumenIcon} src={muted} onClick={() => setMute(false)}></img></span>: <span> <img className={classes.volumenIcon} src={volumeIcon} onClick={() => setMute(true)}></img></span>
        }
            
              <input ref={volumenBar} 
                         type="range"
                         min="0"
                         max="100"
                         value={volumen}
                         onChange={() => setVolumen(volumenBar.current.value)}
                         />
                        <span>{volumen}</span>
            </div>
        </Fragment>
    )
}