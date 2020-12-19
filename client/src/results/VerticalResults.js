import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import './VerticalResults.scss';

function Results(props) {

    const [display, setDisplay] = useState([]);

    useEffect(() => {
        loadCalculations()
    },[props]);

    const loadCalculations = () => {
        API.getCalculations()
            .then(res =>{
                setDisplay(res.data.reverse().slice(0,Math.min(5,res.data.length)))
            })
            .catch(err => console.log(err));
    }    

    return (
        <div>
            <h3>Past Calculations</h3>
                {display.length ? (
                    <List>
                        {display.map(calculation => (
                            <ListItem>
                                <div>{calculation.equation}</div>
                                <div>{calculation.result}</div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h5>No Calculations</h5>
                )}
        </div>
    )

}

export default Results;