import {useMutation} from 'react-query';
import {AuthService} from '../services/auth';

const authService = new AuthService();

const signIn = (data: ILoginData) => authService.login(data);

const signUp = (data: ILoginData) => authService.signUp(data);

export const useSignInUser = () => useMutation(signIn);

export const useSignUpUser = () => useMutation(signUp);
