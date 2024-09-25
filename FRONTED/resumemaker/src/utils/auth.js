export const isAuthenticated = () => {
    // Mock authentication check. Replace with real logic.
    return localStorage.getItem('auth') === 'true';
  };
  
  export const login = () => {
    localStorage.setItem('auth', 'true');
  };
  
  export const logout = () => {
    localStorage.setItem('auth', 'false');
  };
  