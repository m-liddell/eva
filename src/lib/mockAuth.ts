// Mock authentication using localStorage
export interface MockUser {
  id: string;
  email: string;
  name: string;
  signedInAt: string;
  sessionId: string;
}

export class MockAuthService {
  private static readonly STORAGE_KEY = 'eva-mock-session';
  private static readonly USERS_KEY = 'eva-mock-users';

  // Mock user database
  private static getUsers(): Record<string, MockUser> {
    const stored = localStorage.getItem(this.USERS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Default demo user
    const defaultUsers = {
      'teacher@schoo.edu': {
        id: 'demo-user-1',
        email: 'teacher@schoo.edu',
        name: 'Demo Teacher',
        signedInAt: '',
        sessionId: ''
      }
    };
    
    localStorage.setItem(this.USERS_KEY, JSON.stringify(defaultUsers));
    return defaultUsers;
  }

  private static saveUsers(users: Record<string, MockUser>): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  static async signIn(email: string, password: string): Promise<{ user: MockUser | null; error: string | null }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const users = this.getUsers();
    const user = users[email];

    if (!user) {
      return { user: null, error: 'Invalid email or password' };
    }

    // For demo purposes, accept any password for existing users
    // In a real app, you'd verify the password hash
    if (email === 'teacher@schoo.edu' && password !== 'Test1234!') {
      return { user: null, error: 'Invalid email or password' };
    }

    // Create session
    const sessionUser: MockUser = {
      ...user,
      signedInAt: new Date().toISOString(),
      sessionId: Math.random().toString(36).substr(2, 9)
    };

    // Store session
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sessionUser));
    
    // Update user in database
    users[email] = sessionUser;
    this.saveUsers(users);

    return { user: sessionUser, error: null };
  }

  static async signUp(email: string, password: string, userData: { first_name: string; last_name: string }): Promise<{ user: MockUser | null; error: string | null }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = this.getUsers();
    
    if (users[email]) {
      return { user: null, error: 'User already exists' };
    }

    // Create new user
    const newUser: MockUser = {
      id: `user-${Date.now()}`,
      email,
      name: `${userData.first_name} ${userData.last_name}`,
      signedInAt: new Date().toISOString(),
      sessionId: Math.random().toString(36).substr(2, 9)
    };

    // Store user
    users[email] = newUser;
    this.saveUsers(users);

    // Store session
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newUser));

    return { user: newUser, error: null };
  }

  static async signOut(): Promise<void> {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  static getCurrentUser(): MockUser | null {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  }

  static getSession(): { user: MockUser | null } {
    return { user: this.getCurrentUser() };
  }

  static onAuthStateChange(callback: (event: string, session: { user: MockUser | null } | null) => void): () => void {
    // Simple implementation - in a real app you'd use proper event listeners
    const checkAuth = () => {
      const user = this.getCurrentUser();
      callback(user ? 'SIGNED_IN' : 'SIGNED_OUT', { user });
    };

    // Check immediately
    checkAuth();

    // Return unsubscribe function
    return () => {};
  }
}