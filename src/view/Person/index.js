import React,{useState} from 'react';

import PersonContext from "../../components/person/PersonContext"
import PersonState from "../../components/person/PersonState"

function Persons(props) {

    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [favColor,setFavColor] = useState("");
    const [favChar,setFavChar] = useState("");

    const person = {
        name,
        address,
        favColor,
        favChar
    };

    const reset = () => {
        setName("");
        setAddress("");
        setFavColor("");
        setFavChar("");
    };

    return (

        <PersonState>
            <PersonContext.Consumer>
                {
                    personContext =>(
                        <React.Fragment>
                            <form action="#" onSubmit={(e) => {personContext.save(e,person);}}>

                                <div className="form-group">
                                    <label htmlFor="">Nome</label>
                                    <input type="text" className="form-control" onChange={e=>setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Endereço</label>
                                    <input type="text" className="form-control" onChange={e=>setAddress(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Cor favorita</label>
                                    <input type="text" className="form-control" onChange={e=>setFavColor(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Personagem favorito</label>
                                    <input type="text" className="form-control" onChange={e=>setFavChar(e.target.value)}/>
                                </div>

                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <input  className="btn btn-primary" type="submit" value={"Adicionar"} disabled={personContext.submitting} />

                                        </div>
                                        <div className="col-sm-2"><input  className="btn btn-primary" type="reset" value={"Limpar"} onClick={personContext.reset}/></div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        current Person: {JSON.stringify(personContext.currentPerson)}
                                    </div>
                                </div>

                            </form>

                        </React.Fragment>
                    )

                }
            </PersonContext.Consumer>

        </PersonState>

    );
}

export default Persons;