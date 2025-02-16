/**
 * @file useAuth.ts
 * @type hook
 * @project Mewo Portal
 * @description Auth Hook, hanle user login and so on.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { useState, useEffect } from 'react';
import { User } from '../types';
import { keycloak, initKeycloak } from '../lib/keycloak';

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  userRoles: string[];
  debugInfo: string[];
  handleLogin: () => void;
  handleLogout: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [initAttempts, setInitAttempts] = useState(0);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebugInfo = (info: string) => {
    console.log(info);
    setDebugInfo(prev => [...prev, `${new Date().toISOString()}: ${info}`]);
  };

  useEffect(() => {
    let mounted = true;
    let timeoutId: NodeJS.Timeout;

    const initAuth = async () => {
      try {
        addDebugInfo('Starting Keycloak initialization');

        const initPromise = initKeycloak();
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error('Keycloak initialization timed out'));
          }, 10000);
        });

        const authenticated = await Promise.race([initPromise, timeoutPromise]);
        addDebugInfo(`Keycloak initialized: ${authenticated}`);

        if (!mounted) return;

        if (authenticated) {
          try {
            const profile = await keycloak.loadUserProfile();
            const roles = keycloak.realmAccess?.roles || [];

            if (mounted) {
              setUser({
                firstName: profile.firstName ?? '',
                lastName: profile.lastName ?? '',
                email: profile.email ?? '',
                roles: roles,
              });
              setUserRoles(roles);
            }
          } catch (profileError) {
            addDebugInfo(`Profile loading error: ${profileError}`);
            if (mounted) {
              setUser({
                firstName: 'Unknown',
                lastName: 'User',
                email: '',
                roles: keycloak.realmAccess?.roles || [],
              });
              setUserRoles(keycloak.realmAccess?.roles || []);
            }
          }
        }

        if (mounted) setLoading(false);
      } catch (error) {
        addDebugInfo(`Initialization error: ${error}`);
        if (mounted && initAttempts < 2) {
          setInitAttempts(prev => prev + 1);
          setTimeout(initAuth, 2000);
        } else if (mounted) {
          setLoading(false);
        }
      } finally {
        clearTimeout(timeoutId);
      }
    };

    initAuth();

    const refreshInterval = setInterval(() => {
      if (keycloak.authenticated) {
        keycloak.updateToken(70)
          .then(() => addDebugInfo('Token refreshed'))
          .catch((error) => {
            addDebugInfo(`Token refresh failed: ${error}`);
            if (mounted) handleLogout();
          });
      }
    }, 60000);

    return () => {
      mounted = false;
      clearInterval(refreshInterval);
      clearTimeout(timeoutId);
    };
  }, [initAttempts]);

  const handleLogin = () => {
    keycloak.login({
      redirectUri: window.location.origin
    });
  };

  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin
    });
  };

  return {
    user,
    loading,
    userRoles,
    debugInfo,
    handleLogin,
    handleLogout
  };
};