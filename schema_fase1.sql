-- ========================================================
-- Fase 1: Arquitectura Base y Base de Datos (Multi-Tenant)
-- ========================================================

-- Habilitar extensión para UUIDs si no está habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabla de Empresas (B2B)
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    plan_type VARCHAR(50) DEFAULT 'basic', -- basic, premium, enterprise
    user_limit INT DEFAULT 10,
    credit_balance INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla de Usuarios / Perfiles (B2B y B2C)
-- Esta tabla extiende la tabla auth.users de Supabase
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name VARCHAR(255),
    role VARCHAR(50) NOT NULL DEFAULT 'B2C_User', -- Admin, HR_Manager, Colaborador, B2C_User
    company_id UUID REFERENCES public.companies(id) ON DELETE SET NULL, -- Nulo para usuarios B2C
    phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabla de Profesionales (Especialistas)
CREATE TABLE IF NOT EXISTS public.professionals (
    id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
    specialty VARCHAR(100) NOT NULL, -- Psicología, Nutrición, Coach, etc.
    session_fee DECIMAL(10, 2) DEFAULT 0.00,
    is_verified BOOLEAN DEFAULT FALSE,
    bio TEXT,
    video_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabla de Citas (Appointments)
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    professional_id UUID NOT NULL REFERENCES public.professionals(id) ON DELETE CASCADE,
    date_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, completed, cancelled
    payment_method VARCHAR(50) NOT NULL, -- corporate_credit, credit_card
    reason TEXT, -- Motivo de consulta breve
    notes TEXT, -- Notas clínicas post-sesión (solo visibles por el profesional)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ========================================================
-- Row Level Security (RLS) - Políticas Base
-- ========================================================

ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.professionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Políticas para 'companies'
-- Un HR_Manager solo puede ver la empresa a la que pertenece
CREATE POLICY "View own company" ON public.companies
    FOR SELECT USING (
        id IN (SELECT company_id FROM public.users WHERE users.id = auth.uid() AND role = 'HR_Manager')
    );

-- Políticas para 'users'
-- Los usuarios pueden ver su propio perfil
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);
    
-- Un HR_Manager puede ver a los colaboradores de su empresa
CREATE POLICY "HR Managers can view their employees" ON public.users
    FOR SELECT USING (
        company_id IN (SELECT company_id FROM public.users WHERE users.id = auth.uid() AND role = 'HR_Manager')
    );

-- Políticas para 'professionals'
-- Los profesionales verificados son públicos (todos pueden ver el directorio)
CREATE POLICY "Verified professionals are public" ON public.professionals
    FOR SELECT USING (is_verified = TRUE);

-- Los profesionales pueden editar su propio perfil
CREATE POLICY "Professionals can update own profile" ON public.professionals
    FOR UPDATE USING (auth.uid() = id);

-- Políticas para 'appointments'
-- Los pacientes pueden ver sus propias citas
CREATE POLICY "Patients can view own appointments" ON public.appointments
    FOR SELECT USING (auth.uid() = patient_id);

-- Los profesionales pueden ver las citas asignadas a ellos
CREATE POLICY "Professionals can view assigned appointments" ON public.appointments
    FOR SELECT USING (auth.uid() = professional_id);

-- Trigger para automatizar el updated_at
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_companies_modtime BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_users_modtime BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_professionals_modtime BEFORE UPDATE ON public.professionals FOR EACH ROW EXECUTE FUNCTION update_modified_column();
CREATE TRIGGER update_appointments_modtime BEFORE UPDATE ON public.appointments FOR EACH ROW EXECUTE FUNCTION update_modified_column();
