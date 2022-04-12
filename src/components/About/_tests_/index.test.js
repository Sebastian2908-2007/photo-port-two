import { render, cleanup } from '@testing-library/react';
// import the extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//This will ensure that after each test, we won't have any leftover memory data that could give us false results. 
afterEach(cleanup);

describe('About component', () => {
    // this verifies the component is rendering
    it('renders', () => {
        render(<About />);
    })

    // test to compare snapshots of the DOM
    it('matches snapshot DOM node structure', () => {
        // asFragment function returns a snapshot of the About component.
      const { asFragment } = render(<About />);
      /* In the next statement, we'll test and compare whether the expected and actual outcomes
         match. Use the expect function with a matcher to assert something about a value. In the
         following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match */
         expect(asFragment()).toMatchSnapshot();
    })
})