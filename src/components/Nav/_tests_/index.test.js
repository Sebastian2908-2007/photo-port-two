import {render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";
const categories = [
    { name: 'Portraits', description: 'Portraits of people in my life' }
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe(' Nav component', () => {
    // baseline test
it('renders', () => {
  render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCatagory={mockCurrentCategory}
        />);
});
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
                         categories={categories} 
                         setCurrentCategory={mockSetCurrentCategory} 
                         currentCatagory={mockCurrentCategory} 
                                   />);

        expect(asFragment()).toMatchSnapshot();
    })
});

// test to see if emoji is visible
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // getByLabelText method allows us to query an element "aria-label" value
        const { getByLabelText } = render(<Nav
                                 categories={categories}
                                 setCurrentCategory={mockSetCurrentCategory}
                                 currentCatagory={mockCurrentCategory}
                                  />);
// use getByLabelText method to find element with camera as its aria - label then say we expect the camera emoji to be that elements textContent
        expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
});

// test for checking wheteher links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
       const { getByTestId } = render(<Nav
                               categories={categories}
                               setCurrentCategory={mockSetCurrentCategory}
                               currentCatagory={mockCurrentCategory}     
                               />);
       expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
       expect(getByTestId('about')).toHaveTextContent('About Me'); 
    });
});