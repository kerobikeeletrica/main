# MOTO ELÉTRICA - Plataforma de E-commerce

Um site moderno de e-commerce para venda de motos elétricas, desenvolvido com React, Vite e Supabase.

## 🚀 Características

- ✅ **Navegação responsiva** com menu mobile
- ✅ **Catálogo de produtos** com filtros
- ✅ **Calculadora de economia** para comparar custos
- ✅ **Carrinho de compras** funcional
- ✅ **Processo de checkout** em 3 etapas
- ✅ **FAQ e informações de entrega**
- ✅ **Design moderno** e responsivo
- ✅ **Integração com Supabase** para banco de dados
- ✅ **Performance otimizada**

## 📋 Pré-requisitos

- Node.js 16.0 ou superior
- npm ou yarn
- Conta no Supabase (gratuita em https://supabase.com)

## 🔧 Instalação

### 1. Clonar o repositório
```bash
cd moto-eletrica
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais do Supabase:
```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

### 4. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

O site abrirá em `http://localhost:3000`

## 📊 Configurar Supabase

### 1. Criar conta no Supabase
- Acesse https://supabase.com
- Crie um novo projeto

### 2. Criar tabelas

Execute o seguinte SQL no Supabase SQL Editor:

```sql
-- Tabela de Produtos
CREATE TABLE products (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image TEXT,
  motor TEXT,
  max_speed TEXT,
  range TEXT,
  charge_time TEXT,
  battery TEXT,
  weight_capacity TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Pedidos
CREATE TABLE orders (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zipcode TEXT NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Itens do Pedido
CREATE TABLE order_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_id BIGINT NOT NULL REFERENCES orders(id),
  product_id BIGINT NOT NULL REFERENCES products(id),
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- Tabela de Avaliações
CREATE TABLE reviews (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_id BIGINT NOT NULL REFERENCES products(id),
  author TEXT NOT NULL,
  rating INT NOT NULL,
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Ativar RLS (Row Level Security)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Criar política para leitura pública de produtos
CREATE POLICY "Produtos são públicos" ON products
  FOR SELECT USING (true);

-- Criar política para leitura pública de reviews
CREATE POLICY "Reviews são públicas" ON reviews
  FOR SELECT USING (true);

-- Inserir produtos de exemplo
INSERT INTO products (name, category, description, price, motor, max_speed, range, charge_time, battery, weight_capacity) VALUES
('X13 Premium', 'Premium', 'Autonomia de sobra e motor robusto para o dia a dia urbano.', 8499, '1000W', 'Até 32 km/h', 'Até 60 km', '5 a 6 h', 'Lítio removível 60V 20Ah', 'Até 180 kg'),
('X11 Brushless', 'Brushless', 'Motor brushless de 1000W com bateria de longa duração.', 7999, '1000W Brushless', 'Até 32 km/h', 'Até 50 km', '6 a 8 h', 'Lítio removível 60V 23Ah', 'Até 150 kg'),
('X9 Standard', 'Standard', 'O modelo perfeito para começar sua jornada elétrica.', 5999, '800W', 'Até 25 km/h', 'Até 40 km', '4 a 5 h', 'Lítio 60V 15Ah', 'Até 120 kg');
```

### 3. Obter credenciais

- Vá para **Settings → API**
- Copie a URL do seu projeto
- Copie a chave **anon** (pública)

## 📁 Estrutura do Projeto

```
moto-eletrica/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCatalog.jsx
│   │   ├── ProductCard.jsx
│   │   ├── EconomyCalculator.jsx
│   │   ├── DeliveryInfo.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Páginas
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Checkout.jsx
│   ├── services/         # Serviços
│   │   └── supabaseClient.js
│   ├── styles/           # CSS
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── index.html
├── package.json
├── vite.config.js
├── .env.example
└── README.md
```

## 🚀 Build para Produção

```bash
npm run build
```

O site será compilado para a pasta `dist/`.

## 📱 Funcionalidades Principais

### Página Inicial
- Hero section com call-to-action
- Catálogo de motos com especificações
- Calculadora de economia
- Informações de entrega
- FAQ com dúvidas frequentes

### Página de Produto
- Detalhes completos do produto
- Especificações técnicas
- Avaliações dos clientes
- Adicionar ao carrinho

### Checkout
- Carrinho de compras
- Informações de entrega
- Confirmação e pagamento
- Histórico de pedidos

## 🎨 Customização

### Cores Principais
- Primária: `#000` (Preto)
- Secundária: `#ff6b35` (Laranja)
- Fundo: `#f9f9f9` (Cinza claro)

Edite `src/styles/` para alterar as cores.

### Adicionar Novos Produtos

No Supabase, insira novos registros na tabela `products`:

```sql
INSERT INTO products (name, category, description, price, motor, max_speed, range, charge_time, battery, weight_capacity) 
VALUES ('Nome', 'Categoria', 'Descrição', 9999, '1500W', 'Até 35 km/h', 'Até 70 km', '5 a 7 h', 'Lítio 60V 25Ah', 'Até 200 kg');
```

## 🔐 Segurança

- Variáveis sensíveis armazenadas em `.env.local`
- Validação de dados no frontend
- Row Level Security (RLS) no Supabase
- Chave pública (anon) com permissões limitadas

## 📞 Suporte

Para adicionar mais funcionalidades:
- Autenticação de usuários
- Integração de pagamento (Stripe, MercadoPago)
- Sistema de comentários
- Wishlist de produtos
- Rastreamento de pedidos

## 📄 Licença

Este projeto é aberto para uso e modificação.

## 🎯 Próximos Passos

1. ✅ Adicionar autenticação de usuários
2. ✅ Integrar gateway de pagamento
3. ✅ Implementar envio de emails
4. ✅ Criar painel de administrador
5. ✅ Melhorar SEO

---

Desenvolvido com ❤️ para MOTO ELÉTRICA
