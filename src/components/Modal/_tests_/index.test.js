import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";
// mock my p hoto data
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'a beutiful bench alone in the middle of the woods...next to some stairs?',
    index: 1
};
const mockOnClose = jest.fn();
afterEach(cleanup);

describe('Model Component', () => {
    it('renders',() => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockOnClose} />)
    });

    it('matches snapshot',() => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockOnClose}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('test clickhandler',() => {
    it('calls onClose handler',() => {
        // get by text allows us to find an element by the text content *Render Modal*
        const { getByText } = render(<Modal onClose={mockOnClose} currentPhoto={currentPhoto} />);
        // simulate click event
        fireEvent.click(getByText('Close this Modal'));
        // Assert: Expected matcher
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
