import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string;
}

export function Button(props: ButtonProps) {
    return (
        <button {...props} style={{ backgroundColor: props.backgroundColor }}>
            Button
        </button>
    );
}
