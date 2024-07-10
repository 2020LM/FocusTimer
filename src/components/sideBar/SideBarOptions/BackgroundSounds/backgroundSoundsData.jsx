 import src1 from '../../../../assets/audio/BackgroundSounds/Nature/1.mp3'
 import src2 from '../../../../assets/audio/BackgroundSounds/Nature/2.mp3'
 import src3 from '../../../../assets/audio/BackgroundSounds/Nature/3.mp3'
 import src4 from '../../../../assets/audio/BackgroundSounds/Cafe/1.wav'
 import src5 from '../../../../assets/audio/BackgroundSounds/Cafe/2.mp3'
 import src6 from '../../../../assets/audio/BackgroundSounds/Cafe/3.wav'
 import src7 from '../../../../assets/audio/BackgroundSounds/Jazz/1.wav'
 import src8 from '../../../../assets/audio/BackgroundSounds/Jazz/2.wav'
 import src9 from '../../../../assets/audio/BackgroundSounds/Jazz/3.mp3'
 import src10 from '../../../../assets/audio/BackgroundSounds/Classical/1.mp3'
 import src11 from '../../../../assets/audio/BackgroundSounds/Classical/2.mp3'
 import src12 from '../../../../assets/audio/BackgroundSounds/Classical/3.mp3'
 import src13 from '../../../../assets/audio/BackgroundSounds/Nature/4.mp3'
 import src14 from '../../../../assets/audio/BackgroundSounds/Running/1.mp3'
 import src15 from '../../../../assets/audio/BackgroundSounds/Running/2.mp3'
 import src16 from '../../../../assets/audio/BackgroundSounds/Running/3.mp3'

   const song1 = {
        id: 1,
        isPlaying: "false",
        song: src1, 
        duration: 267,
        type: "Nature",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src1)
    }

  const song2 = {
        id: 2,
        isPlaying: "false",
        song: src2,
        duration: 199,
        type: "Nature",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src2)
   }

   const song3 = {
        id: 3,
        isPlaying: "false",
        song: src3,
        duration: 252,
        type: "Nature",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src3)
    }

   const song4 = {
        id: 4,
        isPlaying: "false",
        song: src4,
        duration: 113,
        type: "Cafe",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src4)
    }

   const song5 = {
        id: 5,
        isPlaying: "false",
        song: src5,
        duration: 156,
        type: "Cafe",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src5)
    }

   const song6 = {
        id: 6,
        isPlaying: "false",
        song: src6,
        duration: 195,
        type: "Cafe",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src6)
    }

    const song7 = {
        id: 7,
        isPlaying: "false",
        song: src7,
        duration: 132,
        type: "Jazz",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src7)
    }

    const song8 = {
        id: 8,
        isPlaying: "false",
        song: src8,
        duration: 125,
        type: "Jazz",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src8)
    }

    const song9 = {
        id: 9,
        isPlaying: "false",
        song: src9,
        duration: 83,
        type: "Jazz",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src9)
    }

    const song10 = {
        id: 10,
        isPlaying: "false",
        song: src10,
        duration: 121,
        type: "Classical",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src10)
    }

    const song11 = {
        id: 11,
        isPlaying: "false",
        song: src11,
        duration: 85,
        type: "Classical",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src11)
    }

    const song12 = {
        id: 12,
        isPlaying: "false",
        song: src12,
        duration: 145,
        type: "Classical",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src12)
    }

    const song13 = {
        id: 13,
        isPlaying: "false",
        song: src12,
        duration: 153,
        type: "Nature",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src13)
    }

    const song14 = {
        id: 14,
        isPlaying: "false",
        song: src12,
        duration: 146,
        type: "Running",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src14)
    }

    const song15 = {
        id: 15,
        isPlaying: "false",
        song: src12,
        duration: 122,
        type: "Running",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src15)
    }

    const song16 = {
        id: 16,
        isPlaying: "false",
        song: src12,
        duration: 95,
        type: "Running",
        repeat: "true",
        currentTime: 0,
        audio: new Audio(src16)
    }

 export const BackgroundMusic = () => [
     song1 , song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13,
     song14 , song15 , song16
]