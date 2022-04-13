import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Gallery from "..";

// mock data
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup);

describe('Gallery is rendering', () => {

    it('renders',() => {
        render(<Gallery currentCatagory={portrait} />);
    });

    it('matches snapshot', () => {
        const {  asFragment } = render(<Gallery currentCatagory={portrait} />);

        expect(asFragment()).toMatchSnapshot();

    });

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCatagory={portrait} />);

        expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
    });

});
