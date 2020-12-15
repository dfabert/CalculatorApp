'use strict';
import React from 'react';
import './random.scss';

function Random(){

    var numMax = 10000;
    var numRandom = Math.floor((Math.random() * numMax) + 1);
    return (
        <div>
            Random Number
        </div>
    );
}