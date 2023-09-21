import { render } from '@testing-library/react';

import Home from '../pages';

describe('Home', () => {
    it('renders', () => {
        render(<Home />);
    });
});
