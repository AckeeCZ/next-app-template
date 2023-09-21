import { useForm } from 'react-hook-form';

import { Button } from '@workspace/ui';

import { useLocalizedResolver } from '../../hooks';
import { loginFormSchema, type LoginFormSchema } from './schema';

export const LoginForm = () => {
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
            <Button />
        </form>
    );
};
