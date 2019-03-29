import React, {useState,useReducer} from 'react'
import PersonContext from "./PersonContext";

const PERSON_STATE_ADD = "PERSON_STATE_ADD_PERSON";
const PERSON_STATE_RESET = "PERSON_STATE_RESET_PERSON";

const PersonState = props => {


    const initialState = {
        person: {
            "name": "",
            "address": "",
            "favColor": "",
            "favChar": ""
        },
        persons: []
    };

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

    return (
        <PersonContext.Provider className="Provider"

                                value={
                                    {
                                        currentPerson: state.currentPerson,
                                        save,
                                        submitting,
                                        reset
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
        default:
            return state;
    }
};

export default PersonState;