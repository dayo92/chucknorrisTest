import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import NavBar from './Navbar';

afterEach(cleanup)



test('<Navbar/>', () => {
    const {debug, getByTestId} = render(
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>,
    );
    expect(getByTestId('home-link').getAttribute('href')).toBe('/')
     debug()
});


test('<Navbar/>', () => {
    const {debug, getByTestId} = render(
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>,
    );
    expect(getByTestId('search-link').getAttribute('href')).toBe('/search')
     debug()
});


