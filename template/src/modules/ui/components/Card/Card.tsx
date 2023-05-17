import type { ReactNode } from 'react';

import { card } from './Card.styles';

interface CardProps {
    url: string;
    title: ReactNode;
    description: ReactNode;
    action?: ReactNode | null;
}

export const Card = ({ url, title, description, action = null }: CardProps) => (
    <a href={url} className={card()}>
        <h2>{title}</h2>
        <p>{description}</p>
        {action}
    </a>
);
