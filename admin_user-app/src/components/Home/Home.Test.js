import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {

    let component;
    let mockNote;
    let mockFunction;
    
    test('Component recieved text', () => {
        expect(component.container).toHaveTextContent(mockNote.content);
      });

})