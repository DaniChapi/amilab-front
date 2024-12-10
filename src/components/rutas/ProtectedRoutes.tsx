// src/router/ProtectedRoutes.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { client } from '../../supabase/client';

export const ProtectedJefeRoute = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const { data: { user } } = await client.auth.getUser();
        
        if (user) {
          const { data } = await client
            .from('users')
            .select('role')
            .eq('email', user.email)
            .single();

          if (data && data.role === 'jefe') {
            setUserRole('jefe');
          } else {
            setUserRole('unauthorized');
          }
        } else {
          setUserRole('unauthorized');
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        setUserRole('unauthorized');
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return userRole === 'jefe' ? <Outlet /> : <Navigate to="/login" replace />;
};

export const ProtectedVendedorRoute = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const { data: { user } } = await client.auth.getUser();
        
        if (user) {
          const { data } = await client
            .from('users')
            .select('role')
            .eq('email', user.email)
            .single();

          if (data && data.role === 'vendedor') {
            setUserRole('vendedor');
          } else {
            setUserRole('unauthorized');
          }
        } else {
          setUserRole('unauthorized');
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        setUserRole('unauthorized');
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return userRole === 'vendedor' ? <Outlet /> : <Navigate to="/login" replace />;
};