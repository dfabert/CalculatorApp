import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import './VerticalResults.scss';

function Results() {
     
    const[calculations, setCalculations] = useState([])

    useEffect(() => {
        loadCalculations()
    }, [])

    function loadCalculations() {
        console.log("----'Loading Calculations'-----");
        API.getCalculations()
            .then(res =>
                setCalculations(res.data)    
            )
            .catch(err => console.log(err));
    };
    return (
        <aside fluid>
            <h3>Past Calculations</h3>
                {calculations.length ? (
                    <List>
                        {calculations.map(calculation => (
                            <ListItem>
                                {calculation.equation}
                                {calculation.result}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h5>No Calculations</h5>
                )}
        </aside>
    )

}

export default Results;