import {RESET,SET_USER,RES_MENSAJE,ADD_MENSAJE, ADD_TEACHER,SET_PREMIUM} from "./actions";
import teacher1 from "../assets/techer1.png"
import teacher2 from "../assets/techer2.png"
import teacher3 from "../assets/techer3.png"
import teacher4 from "../assets/techer4.png"
import teacher5 from "../assets/icono1.png"
import teacher6 from "../assets/icono2.png"

let initialState={
   
   
    user:{
        id: 1,
        nombre:"Alumno",
        correo: "",
        mensajes: 2,
        premium: false,
       },
    profesores:{"es":[
        {"materia":"Química",
        "foto":teacher1},
        {"materia":"Matemáticas ",
        "foto":teacher2},
        {"materia":"Lenguaje",
        "foto":teacher3},
        {"materia":"Física",
        "foto":teacher4},
        {"materia":"Historia",
        "foto":teacher5},
        {"materia":"Cálculo",
        "foto":teacher6},
    ],
    "en":[
        {"materia":"Chemistry",
        "foto":teacher1},
        {"materia":"Math ",
        "foto":teacher2},
        {"materia":"Language",
        "foto":teacher3},
        {"materia":"Physical",
        "foto":teacher4},
        {"materia":"History",
        "foto":teacher5},
        {"materia":"Calculation",
        "foto":teacher6},
    ]},
};

const rootReducer= (state=initialState, actions)=>{
    switch (actions.type) {
        case SET_USER:
            return {...state,user:actions.payload} 
        case SET_PREMIUM:
                return {...state,user:{...state.user, premium:actions.payload}}
        case RES_MENSAJE:
            return {...state,user:{...state.user,mensajes:state.user.mensajes==0?0:(state.user.mensajes-1)}} 
        case ADD_MENSAJE:
            return {...state,user:{...state.user,mensajes:(state.user.mensajes+1)}}
        case ADD_TEACHER:
            let teacherEn=state.profesores.en;
            let teacherEs=state.profesores.es;
            teacherEs.push({"materia":actions.payload.materia,"foto":actions.payload.foto})
            teacherEn.push({"materia":actions.payload.materia,"foto":actions.payload.foto})

            return {...state,profesores:{"es":teacherEs,"en":teacherEn}}  
        case RESET:
            return {...initialState}

        default:
            return {...state};
        
        }
   
}

export default rootReducer;