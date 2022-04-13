import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('contactForm component', () => {
    it('renders', () => {
        render(<ContactForm/>)
    });

    it('matches snapshot', () => {
        const {  asFragment } = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('make sure title and button are visible', () => {
    it('it has a button and title',() => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('contact-title')).toHaveTextContent('Contact me');
        expect(getByTestId('contact-submit')).toHaveTextContent('Submit');
    });
});