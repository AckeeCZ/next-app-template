interface ButtonProps {
    disabled?: boolean;
}

export const Button = ({ disabled = false }: ButtonProps) => {
    return <button disabled={disabled}>Button</button>;
};
