'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useRouter, usePathname } from "next/navigation";
import { redirect } from "next/navigation";

type AuthData = {
    loading: boolean;
    session: Session | null;
    signOut: () => Promise<void>;

}

const AuthContext = createContext<AuthData>({
    loading: true,
    session: null,
    signOut: async () => { },
});

interface props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: props) => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        async function fetchSession() {

            await new Promise(res => setTimeout(res, 1000));
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                throw error;
            }
            if (data.session) {
                setSession(data.session);
            }
            setLoading(false);
        };
        fetchSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
            setSession(session);
            const publicRoutes = ['/auth/login', '/auth/signup'];
            if (session && publicRoutes.includes(pathname)) {
                redirect('/dashboard');
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        }
    }, []);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        setSession(null);
        router.push('/auth/login');
    }

    return (
        <AuthContext.Provider value={{ loading, session, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}   