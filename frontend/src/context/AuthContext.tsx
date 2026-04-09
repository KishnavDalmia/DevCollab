import {createContext,useContext,useEffect,useState} from 'react';
import axios from '../api/axios'

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface AuthResponse{
    success:boolean;
    message?:string;
}

interface AuthContextType{
    user: User|null;
    loading: boolean;
    register: (name: string, username: string, email: string, password: string) => Promise<AuthResponse>;
    login: (email: string, password: string) => Promise<AuthResponse>;
    logout: Promise<AuthResponse>;
    checkAuth: Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps{
    children: React.ReactNode;
}

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [user,setUser] = useState<User | null>(null);
    const [loading,setLoading] = useState<boolean>(true);
    
    useEffect(() => { checkAuth() },[]);

    const checkAuth = async (): Promise<void> => {
        try{
            const response = await axios.get('/auth/me');
            setUser(response.data.user);
        }catch(err){
            console.log(err);
            setUser(null);
        }finally{
            setLoading(false);
        }
    };

    const register = async(name: string,username: string ,email: string,password: string)=>{
        try{
            const response = await axios.post('/auth/register',{
                name,
                username,
                email,
                password
            });
            setUser(response.data.user);
            return { success: true };
        }catch(err){
            return{
                success: false,
                message: err.response?.data?.message || 'Registration Failed'
            };
        }
    };

    const login = async (email: string,password: string) => {
        try{
            const response = await axios.post('/auth/login',{
                email,
                password
            });
            setUser(response.data.user);
            return { success: true};
        }catch(err){
            return {
                success: false,
                message: err.response?.data?.message || 'Login Failed'
            };
        }
    };

    const logout = async (): Promise<AuthResponse> => {
        try{
            await axios.post('/auth/logout');
            setUser(null);
            return {success: true};
        }catch(err){
            return{
                success: false,
                message: err.response?.data?.message || 'Login Failed'
            };
        }
    };

    const value:AuthContextType = {
        user,
        loading,
        register,
        login,
        logout,
        checkAuth,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>    
}

export const useAuth = ():AuthContextType => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAth must be used within AuthProvider');
    }
    return context;
};