-- Inserir dados iniciais

-- Inserir serviços
INSERT INTO services (name, description, duration, price) VALUES
('Corte Masculino', 'Corte de cabelo masculino tradicional', 30, 25.00),
('Corte Feminino', 'Corte de cabelo feminino', 45, 35.00),
('Escova', 'Escova modeladora', 60, 30.00),
('Coloração', 'Coloração completa do cabelo', 120, 80.00),
('Luzes', 'Mechas e luzes', 90, 60.00),
('Barba', 'Corte e modelagem de barba', 20, 15.00),
('Sobrancelha', 'Design de sobrancelhas', 15, 12.00);

-- Inserir profissionais
INSERT INTO professionals (name, email, phone, specialty) VALUES
('Sandro Silva', 'sandro@sandrocabeleireiros.com', '(11) 99999-0001', 'Cortes Masculinos e Barba'),
('Maria Santos', 'maria@sandrocabeleireiros.com', '(11) 99999-0002', 'Cortes Femininos e Coloração'),
('João Oliveira', 'joao@sandrocabeleireiros.com', '(11) 99999-0003', 'Cortes Masculinos'),
('Ana Costa', 'ana@sandrocabeleireiros.com', '(11) 99999-0004', 'Coloração e Luzes');

-- Inserir horários de trabalho (Segunda a Sábado, 8h às 18h)
INSERT INTO professional_schedules (professional_id, day_of_week, start_time, end_time)
SELECT p.id, dow, '08:00'::time, '18:00'::time
FROM professionals p
CROSS JOIN generate_series(1, 6) as dow;

-- Inserir admin
INSERT INTO admins (email, name) VALUES
('admin@sandrocabeleireiros.com', 'Administrador');
