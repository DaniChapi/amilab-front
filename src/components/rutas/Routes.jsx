import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { client } from '../supabase/client'; // Usa tu cliente de Supabase

// Componente de ruta protegida para Jefe
const ProtectedJefeRoute = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const { data: { user } } = await client.auth.getUser();
        
        if (user) {
          const { data, error } = await client
            .from('users') // Asegúrate de tener esta tabla en Supabase
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
    return <div>Cargando...</div>; // O un spinner de carga
  }

  return userRole === 'jefe' ? <Outlet /> : <Navigate to="/login" replace />;
};

// Componente de ruta protegida para Vendedor
const ProtectedVendedorRoute = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const { data: { user } } = await client.auth.getUser();
        
        if (user) {
          const { data, error } = await client
            .from('users') // Asegúrate de tener esta tabla en Supabase
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
    return <div>Cargando...</div>; // O un spinner de carga
  }

  return userRole === 'vendedor' ? <Outlet /> : <Navigate to="/login" replace />;
};

export { ProtectedJefeRoute, ProtectedVendedorRoute };