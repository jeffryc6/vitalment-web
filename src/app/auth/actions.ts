'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import db from '@/data/demo-db.json';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Buscar usuario en nuestro mock DB
  const user = db.users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return redirect('/auth/login?message=Credenciales incorrectas (Demo)');
  }

  // Crear una sesión "falsa" para el demo usando cookies
  const sessionData = JSON.stringify({ id: user.id, email: user.email, role: user.role, name: user.full_name });
  cookies().set('demo_session', sessionData, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24 });

  // Redirigir según el rol
  const role = user.role || 'B2C_User';

  if (role === 'HR_Manager') {
    return redirect('/hr');
  } else if (role === 'Profesional') {
    return redirect('/profesional');
  } else {
    return redirect('/colaborador');
  }
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('fullName') as string;

  // En un demo local, simplemente fingimos el registro exitoso
  // Para que el usuario entre, creamos una cookie como si fuera un B2C_User
  const mockNewUser = {
    id: `user-new-${Date.now()}`,
    email,
    role: 'B2C_User',
    name: fullName
  };

  const sessionData = JSON.stringify(mockNewUser);
  cookies().set('demo_session', sessionData, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24 });

  // Redirige al dashboard de colaborador/cliente
  return redirect('/colaborador');
}

export async function logout() {
  cookies().delete('demo_session');
  return redirect('/');
}
