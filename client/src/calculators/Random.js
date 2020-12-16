'use strict';
import React from "react";
//import Results from '../results/VerticalResults';
//import Button from 'react-bootstrap/Button';

import './Random.scss';
//import API from "../utils/API";

//import './random.scss';

function Random(){

    var numMax = 10000;
    var numRandom = Math.floor((Math.random() * numMax) + 1);
    return (
        <div>
            Random Number
        </div>
    );
}

export default Random;