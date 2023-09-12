import { useForm } from 'react-hook-form';

import { useLocalizedResolver } from '~modules/form/hooks';

import { LoginFormSchema, loginFormSchema } from './schema';

export interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormSchema>({
        resolver: useLocalizedResolver(loginFormSchema),
    });

    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <input type='email' {...register('email')} />
            {errors.email?.message && <p>{errors.email?.message}</p>}
            <input type='password' {...register('password')} />
            {errors.password?.message && <p>{errors.password?.message}</p>}
            <input type='submit' />
        </form>
    );
};
