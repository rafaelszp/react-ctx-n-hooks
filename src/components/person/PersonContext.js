import React from "react";

const PersonContext = React.createContext({
    submitting: false,
    currentPerson: {},
    persons:[]
});

export default PersonContext;