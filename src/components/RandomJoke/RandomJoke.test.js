import React from 'react';
import RandomJoke from './RandomJoke'
import {render, fireEvent, cleanup} from '@testing-library/react';


// it('API test', async function(){
//     const res = new RandomJoke; 
//     console.log( await res.getJoke)
// })

test('Snapshot of RandomJoke component', () => {
    const {debug, getByTestId} = render(
      
            <RandomJoke/>
      
    );
    expect(<RandomJoke/>).toMatchSnapshot()
     debug()
});

