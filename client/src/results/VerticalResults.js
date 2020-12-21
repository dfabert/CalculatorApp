import React, { useState, useEffect, useContext } from 'react';
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import './VerticalResults.scss';

function Results(props) {

    const id = localStorage.getItem('user');
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        loadCalculations()
    },[props]);

    const loadCalculations = () => {
        API.getCalculations()
            .then(res =>{
                let filtered = [];
                if(id === 'default'){
                    filtered = res.data;
                } else {
                    filtered = res.data.filter(calculation => calculation.userId === id);
                }
                setDisplay(filtered.reverse().slice(0,Math.min(5,filtered.length)));
            })
            .catch(err => console.log(err));
    }    

    return (
        <div>
            <h3>{id === 'default' ? 'Recent calculations by all users:' : "Your recent calculations:  " }</h3>
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