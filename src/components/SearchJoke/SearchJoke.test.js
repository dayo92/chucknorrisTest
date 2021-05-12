import React from 'react';
import {
    render,
    cleanup,
    fireEvent
} from '@testing-library/react';
import SearchJoke from './SearchJoke';

afterEach(cleanup);


console.error= jest.fn();

test('<SearchJoke>', () => {
    const {
        
        queryByTestId,
        getByTestId
    } = render( <SearchJoke /> );


    expect(queryByTestId('search-form')).toBeTruthy();
    fireEvent.click(getByTestId('submit'));
    expect(console.error).toBeCalled();
    // expect(onSubmit).toHaveBeenCalledTimes(1);
    // debug()

});