import React, { useState, useEffect } from 'react';
import API from "../utils/API";

function Calculations() {
     
    const[calculations, setCalculation] = useState([])
    const[formObject, setFormObject] = useState({})

    useEffect(() => {
        loadCalculations()
    }, [])

    function loadCalculations() {
        API.getCalculations()
            .then(res =>
                setCalculations(res.data)    
            )
            .catch(err => console.log(err));
    };
    return (
        <Container fluid>
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

                )}

        </Container>
    )

}

export default Calculations;