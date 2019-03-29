import React, {useState,useReducer} from 'react'
import PersonContext from "./PersonContext";

const PERSON_STATE_ADD = "PERSON_STATE_ADD_PERSON";
const PERSON_STATE_RESET = "PERSON_STATE_RESET_PERSON";
const PERSON_LOAD_DEFAULT = "PERSON_LOAD_DEFAULT";

const initialState = {
    person: {
        "name": "",
        "address": "",
        "favColor": "",
        "favChar": ""
    },
    persons: []
};
const PersonState = props => {



    const [state,dispatch] = useReducer(reducer,initialState);
    const [submitting,setSubmitting] = useState(false);

    const save = (event,person) =>{
        setSubmitting(true);

        //Simulating POST through API
        setTimeout(()=>{
            dispatch({type: PERSON_STATE_ADD, payload: person});
            setSubmitting(false);
        },Math.random()*3000);
        event.preventDefault();
    };

    const reset =  () =>{
        dispatch({type: PERSON_STATE_RESET, payload: initialState.person});
    };

    const loadDefault = () => {
        dispatch({type: PERSON_LOAD_DEFAULT});
    };

    return (
        <PersonContext.Provider className="Provider"

                                value={
                                    {
                                        currentPerson: state.currentPerson || state.person,
                                        save,
                                        submitting,
                                        reset,
                                        loadDefault
                                    }
                                }>

            {props.children}
        </PersonContext.Provider>
    )

};

const reducer = (state,action) => {
    switch(action.type){
        case PERSON_STATE_ADD:
            console.log('atualizando pessoa '+JSON.stringify(action.payload));
            return {...state, currentPerson: action.payload};
        case PERSON_STATE_RESET:
            return {...state, currentPerson: action.payload};
        case PERSON_LOAD_DEFAULT:
            return {...state, currentPerson: {name: 'Rafael', address:'A street', favColor: 'Runaway donkey', favChar: 'Chapolin'}};
        default:
            return state;
    }
};

export default PersonState;