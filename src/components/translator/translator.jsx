import { useCurrentLanguage, useLanguage } from "../../context/context";



export const useTranslator = (language, word) => {
    const [ currentLanguage , setCurrentLanguage ] = useCurrentLanguage()
 
    if(language == "English") {
        return word
    }
    if (language == "Español") {
        return SpanishTranslate(word)
    } else if (language == "português") {
        return  PortugueseTranslate(word)
    } else if (language == "हिंदी") {
        return  HindiTranslate(word)
    }


}


const SpanishTranslate = (word) => {
    if(word == "Timer") {
        return "Temporizador"
    } else if (word == "Set Time") {
        return "Establecer Tiempo"
    } else if (word == "Start Timer") {
        return "Iniciar Temporizador"
    } else if (word == "Restart Timer") {
        return "Reiniciar Temporizador"
    } else if (word == "Pause Timer") {
        return "Pausar Temporizador"
    } else if (word == "Done!") {
        return "¡Tiempo!"
    } else if (word == "Change Background") {
        return "Cambiar Fondo"
    } else if (word == "Set Alarm") {
        return "Establecer Alarma"
    } else if (word == "Set Music") {
        return "Establecer Música"
    } else if (word == "Set Language") {
        return "Establecer Lenguaje"
    } else if (word == "Nature") {
        return "Naturaleza"
    } else if (word == "Anime") {
        return "Anime"
    } else if (word == "Cafe") {
        return "Cafetería"
    } else if (word == "Jazz") {
        return "Jazz"
    } else if (word == "Running") {
        return "Correr"
    } else if (word == "Success") {
        return "Éxito"
    } else if (word == "Gradients") {
        return "Gradientes"
    } else if (word == "Solid") {
        return "Sólidos"
    } else if (word == "Alarms") {
        return "Alarmas"
    } else if (word == "Alarm") {
        return "Alarma"
    } else if (word == "Sounds") {
        return "Sonidos"
    } else if (word == "Classical") {
        return "Clásica"
    } else if (word == "Languages") {
        return "Lenguajes"
    } else if (word == "Silence") {
        return "Silencio"
    } else if (word == "Accept") {
        return "Aceptar"
    } 

}

const PortugueseTranslate = (word) => {
    if(word == "Timer") {
        return "Temporizador"
    } else if (word == "Set Time") {
        return "Definir Tempo"
    } else if (word == "Start Timer") {
        return "Iniciar Temporizador"
    } else if (word == "Restart Timer") {
        return "Reiniciar Temporizador"
    } else if (word == "Pause Timer") {
        return "Pausar Temporizador"
    } else if (word == "Done!") {
        return "Terminou!"
    } else if (word == "Done!") {
        return "¡Tiempo!"
    } else if (word == "Change Background") {
        return "Alterar plano de fundo"
    } else if (word == "Set Alarm") {
        return "Definir alarme"
    } else if (word == "Set Music") {
        return "Definir música"
    } else if (word == "Set Language") {
        return "Definir idioma"
    } else if (word == "Nature") {
        return "Natureza"
    } else if (word == "Anime") {
        return "Anime"
    } else if (word == "Cafe") {
        return "Cafeteria"
    } else if (word == "Jazz") {
        return "Jazz"
    } else if (word == "Running") {
        return "Corrida"
    } else if (word == "Success") {
        return "Sucesso"
    } else if (word == "Gradients") {
        return "Gradientes"
    } else if (word == "Solid") {
        return "Sólido"
    } else if (word == "Alarms") {
        return "Alarmes"
    } else if (word == "Alarm") {
        return "Alarme"
    } else if (word == "Sounds") {
        return "Sons"
    } else if (word == "Classical") {
        return "Clássico"
    } else if (word == "Languages") {
        return "Línguas"
    } else if (word == "Silence") {
        return "Silêncio"
    } else if (word == "Accept") {
        return "Aceitar"
    } 
}

const HindiTranslate = (word) => {
    if(word == "Timer") {
        return "टाइमर"
    } else if (word == "Set Time") {
        return "समय निर्धारित करें"
    } else if (word == "Start Timer") {
        return "टाइमर शुरू करें"
    } else if (word == "Restart Timer") {
        return "टाइमर रिसेट करें"
    } else if (word == "Pause Timer") {
        return "टाइमर रोकें"
    } else if (word == "Done!") {
        return "समाप्त!"
    } else if (word == "Change Background") {
        return "पृष्ठभूमि बदलें"
    } else if (word == "Set Alarm") {
        return "अलार्म सेट करें"
    } else if (word == "Set Music") {
        return "संगीत सेट करें"
    } else if (word == "Set Language") {
        return "भाषा सेट करें"
    } else if (word == "Nature") {
        return "प्रकृति"
    } else if (word == "Anime") {
        return "एनीमे "
    } else if (word == "Cafe") {
        return "कैफे "
    } else if (word == "Jazz") {
        return "जैज"
    } else if (word == "Running") {
        return "दौड़ना "
    } else if (word == "Success") {
        return "सफलता "
    } else if (word == "Gradients") {
        return "ग्रेडिएंट्स "
    } else if (word == "Solid") {
        return "ठोस "
    } else if (word == "Alarms") {
        return "अलार्म "
    } else if (word == "Alarm") {
        return "अलार्म "
    } else if (word == "Sounds") {
        return "ध्वनियाँ"
    } else if (word == "Classical") {
        return "शास्त्रीय"
    } else if (word == "Languages") {
        return "भाषाएँ"
    } else if (word == "Silence") {
        return "अलार्म बंद करें"
    } else if (word == "Accept") {
        return "स्वीकार"
    } 
}