'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

type AuthData = {
    loading: boolean;
    session: Session | null;
}

const AuthContext = createContext<AuthData>({
    loading: true,
    session: null,
});

interface props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: props) => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);

    const Router = useRouter();

    useEffect(() => {
        
        async function fetchSession() {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                throw error;
            }
            if (data.session) {
                setSession(data.session);
            }
            setLoading(false);
        }
        fetchSession();
        const { data: authListener } = supabase.auth.onAuthStateChange( async (_, session) => {
            setSession(session);
            setLoading(false);

            if (session) {
                Router.push("/dashboard")
            }
            

        });

        return () => {
            authListener?.subscription.unsubscribe();
        }

    }, []);

    return (
        <AuthContext.Provider value={{ loading, session }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}