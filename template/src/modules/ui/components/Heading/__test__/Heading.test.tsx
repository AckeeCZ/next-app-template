import { render, screen } from '@testing-library/react';

import { Heading } from '../../Heading';

describe('Heading component', () => {
    it('should render default Heading (h1) component correctly', () => {
        render(<Heading>Heading level 1</Heading>);
        const element = screen.getByRole('heading', { level: 1 });

        expect(element).toBeInTheDocument();
    });
    it('should render Heading level 2 (h2) component correctly', () => {
        render(
            <Heading level={2} as="h2">
                Heading level 2
            </Heading>,
        );
        const element = screen.getByRole('heading', { level: 2 });

        expect(element).toBeInTheDocument();
    });
});
