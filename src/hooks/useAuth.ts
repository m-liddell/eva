import { useState, useEffect } from 'react';
import { MockAuthService, MockUser } from '../lib/mockAuth';

export function useAuth() {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    const currentUser = MockAuthService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);

    // Set up auth state listener
    const unsubscribe = MockAuthService.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    const { user, error } = await MockAuthService.signIn(email, password);
    if (error) throw new Error(error);
    return { user };
  };

  const signUp = async (email: string, password: string, userData: { first_name: string; last_name: string }) => {
    const { user, error } = await MockAuthService.signUp(email, password, userData);
    if (error) throw new Error(error);
    return { user };
  };

  const signOut = async () => {
    await MockAuthService.signOut();
    setUser(null);
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut
  };
}