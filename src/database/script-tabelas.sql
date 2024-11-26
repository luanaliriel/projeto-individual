CREATE DATABASE sussurrosDoCoracao;

USE sussurrosDoCoracao;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
senha varchar(45),
email varchar(45) unique, 
idade int,
genero varchar(10), constraint chkGenero check (genero in('Feminino', 'Masculino'))
);

CREATE TABLE pontuacao (
idPontuacao int primary key auto_increment,
pontosShizuku int,
pontosSeiji int,
personagemFinal varchar(15), constraint chkPersonagem check (personagemFinal in('Shizuku', 'Seiji', 'Mistura')),
fkUsuario int, foreign key (fkUsuario) references usuario(idUsuario)
);

SELECT * from usuario;
SELECT * from pontuacao;

INSERT INTO usuario (nome, senha, email, idade, genero) VALUES
('Luana Liriel', 'Luana123@', 'luhliriel@gmail.com', 22, 'Feminino'),
('Jorge Uliam', 'Jorge123#', 'jorge.uliam@gmail.com', 23, 'Masculino'),
('Amanda Silva', 'Amanda456$', 'amanda.silva@gmail.com', 27, 'Feminino'),
('Carlos Eduardo', 'Carlos789%', 'carlos.edu@gmail.com', 30, 'Masculino'),
('Julia Souza', 'Julia321&', 'julia.souza@gmail.com', 19, 'Feminino'),
('Marcos Vinícius', 'Marcos654*', 'marcos.vini@gmail.com', 34, 'Masculino'),
('Ana Paula', 'Ana987@', 'ana.paula@gmail.com', 28, 'Feminino'),
('Rafael Alves', 'Rafael246!', 'rafael.alves@gmail.com', 23, 'Masculino'),
('Beatriz Lima', 'Beatriz135%', 'beatriz.lima@gmail.com', 21, 'Feminino'),
('Gabriel Costa', 'Gabriel852&', 'gabriel.costa@gmail.com', 49, 'Masculino'),
('Mariana Ferreira', 'Mari753#', 'mariana.ferreira@gmail.com', 24, 'Feminino'),
('Lucas Oliveira', 'Lucas369$', 'lucas.oliveira@gmail.com', 29, 'Masculino'),
('Isabela Rocha', 'Isa159@', 'isabela.rocha@gmail.com', 22, 'Feminino'),
('Pedro Henrique', 'Pedro951%', 'pedro.henrique@gmail.com', 31, 'Masculino'),
('Fernanda Gomes', 'Fernanda753&', 'fernanda.gomes@gmail.com', 56, 'Feminino'),
('Thiago Martins', 'Thiago357*', 'thiago.martins@gmail.com', 27, 'Masculino'),
('Carolina Santos', 'Carol258!', 'carol.santos@gmail.com', 19, 'Feminino'),
('Vinícius Mendes', 'Vini654@', 'vinicius.mendes@gmail.com', 33, 'Masculino'),
('Letícia Andrade', 'Leti369$', 'leticia.andrade@gmail.com', 23, 'Feminino'),
('Fábio Monteiro', 'Fabio753%', 'fabio.monteiro@gmail.com', 28, 'Masculino'),
('Lara Campos', 'Lara135&', 'lara.campos@gmail.com', 58, 'Feminino'),
('Bruno Silva', 'Bruno987*', 'bruno.silva@gmail.com', 26, 'Masculino'),
('Camila Ribeiro', 'Camila123!', 'camila.ribeiro@gmail.com', 30, 'Feminino'),
('Gustavo Moraes', 'Gustavo456@', 'gustavo.moraes@gmail.com', 61, 'Masculino'),
('Patrícia Lopes', 'Patricia789$', 'patricia.lopes@gmail.com', 25, 'Feminino'),
('Eduardo Nascimento', 'Edu135%', 'eduardo.nascimento@gmail.com', 31, 'Masculino'),
('Sabrina Oliveira', 'Sabrina852&', 'sabrina.oliveira@gmail.com', 69, 'Feminino'),
('Ricardo Barbosa', 'Ricardo951*', 'ricardo.barbosa@gmail.com', 32, 'Masculino'),
('Natália Cunha', 'Natalia357!', 'natalia.cunha@gmail.com', 22, 'Feminino'),
('Felipe Cardoso', 'Felipe654@', 'felipe.cardoso@gmail.com',67, 'Masculino'),
('Jorge Ulian', 'jorji123@', 'jorjiomg@gmail.com', 19, 'Masculino'),
('Filipa Urias', 'Filipa@', 'filipau@gmail.com',12, 'Feminino'),
('Carlos Emanuel', 'carloseman123#', 'carlosem3@gmail.com', 67, 'Masculino');



INSERT INTO pontuacao (pontosShizuku, pontosSeiji, personagemFinal, fkUsuario) VALUES
(7, 3, 'Shizuku', 1), -- Luana Liriel (22 anos, jovem)
(3, 7, 'Shizuku', 2),   -- Jorge Uliam (23 anos, mais jovem)
(6, 4, 'Shizuku', 3), -- Amanda Silva (27 anos, jovem)
(4, 6, 'Seiji', 4),   -- Carlos Eduardo (30 anos, jovem com equilíbrio)
(8, 2, 'Shizuku', 5), -- Julia Souza (19 anos, muito jovem)
(2, 8, 'Seiji', 6),   -- Marcos Vinícius (34 anos, mais velho)
(7, 3, 'Shizuku', 7), -- Ana Paula (28 anos, jovem)
(6, 4, 'Shizuku', 8), -- Rafael Alves (23 anos, jovem)
(8, 2, 'Shizuku', 9), -- Beatriz Lima (21 anos, jovem)
(2, 8, 'Seiji', 10),  -- Gabriel Costa (49 anos, mais velho)
(7, 3, 'Shizuku', 11),-- Mariana Ferreira (24 anos, jovem)
(5, 5, 'Mistura', 12),-- Lucas Oliveira (29 anos, equilíbrio)
(8, 2, 'Shizuku', 13),-- Isabela Rocha (22 anos, jovem)
(4, 6, 'Seiji', 14),  -- Pedro Henrique (31 anos, mais velho)
(3, 7, 'Seiji', 15),  -- Fernanda Gomes (56 anos, mais velho)
(6, 4, 'Shizuku', 16),-- Thiago Martins (27 anos, jovem)
(8, 2, 'Shizuku', 17),-- Carolina Santos (19 anos, muito jovem)
(4, 6, 'Seiji', 18),  -- Vinícius Mendes (33 anos, mais velho)
(7, 3, 'Shizuku', 19),-- Letícia Andrade (23 anos, jovem)
(6, 4, 'Shizuku', 20),-- Fábio Monteiro (28 anos, jovem)
(3, 7, 'Seiji', 21),  -- Lara Campos (58 anos, mais velho)
(6, 4, 'Shizuku', 22),-- Bruno Silva (26 anos, jovem)
(5, 5, 'Mistura', 23),-- Camila Ribeiro (30 anos, equilíbrio)
(3, 7, 'Seiji', 24),  -- Gustavo Moraes (61 anos, mais velho)
(7, 3, 'Shizuku', 25),-- Patrícia Lopes (25 anos, jovem)
(4, 6, 'Seiji', 26),  -- Eduardo Nascimento (31 anos, mais velho)
(2, 8, 'Seiji', 27),  -- Sabrina Oliveira (69 anos, muito velho)
(4, 6, 'Seiji', 28),  -- Ricardo Barbosa (32 anos, mais velho)
(7, 3, 'Shizuku', 29),-- Natália Cunha (22 anos, jovem)
(3, 7, 'Seiji', 30),  -- Felipe Cardoso (67 anos, muito velho)
(4, 6, 'Seiji', 31),
(5, 5, 'Mistura', 32),
(5, 5, 'Mistura', 33);


-- KPI: total de participantes
SELECT count(*) AS contagemTotal FROM pontuacao;


-- KPI: Maioria dos usuários se identifica mais com
SELECT personagemFinal, count(*) as contagem
FROM pontuacao
GROUP BY 1
ORDER BY count(*) DESC;


-- Gráfico: Personagem por faixa etária
SELECT personagemFinal,
	CASE 
        WHEN idade BETWEEN 10 AND 20 THEN '10-20'
        WHEN idade BETWEEN 21 AND 30 THEN '21-30'
        WHEN idade > 30 THEN '30++'
    END AS faixaEtaria,
    count(*) as contagem
    from pontuacao join usuario
    on idUsuario = fkUsuario
    group by 1,2 order by personagemFinal desc;
    


-- Gráfico: Personagem por gênero
SELECT personagemFinal, genero, count(*) as contagem
from pontuacao inner join usuario
on idUsuario = fkUsuario
group by 1,2
order by personagemFinal desc;