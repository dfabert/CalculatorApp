import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Results({calculations}) {
    let display = calculations.reverse().slice(0,Math.min(5,calculations.length));
    console.log(display);

    return (
        <Container fluid>
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
        </Container>
    )

}

export default Results;