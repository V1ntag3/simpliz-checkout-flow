# Simplz Checkout Flow

Projeto desenvolvido como parte de um processo seletivo, com o objetivo de demonstrar um fluxo completo de checkout para a contratação de um produto SaaS.


## 🚨 Observação Importante

A tela inicial do projeto (rota `/`) está em branco.  
Para iniciar o fluxo corretamente, acesse diretamente a URL:

```
https://simplz.netlify.app/plans
```


## 🛠️ Project Setup

**Instalação de dependências:**

```bash
npm install
```

### 🔧 Ambiente de Desenvolvimento
---

Compila e recarrega automaticamente o projeto para desenvolvimento:

```bash
npm run serve
```

### 🚀 Build para Produção
---

Compila e minifica os arquivos para uso em produção:

```bash
npm run build
```

### 🧹 Lint e Correções
---

Analisa e corrige automaticamente problemas de lint no código:

```bash
npm run lint
```


## 📋 Sobre o Projeto

O sistema implementa um fluxo de checkout dividido em etapas, com foco em usabilidade, clareza e oportunidade de venda de serviços adicionais.

### 🔄 Fluxo de Telas

**1. Seleção de Planos**  
Apresenta ao cliente os planos disponíveis para contratação.  
Permite a escolha do plano mais adequado às suas necessidades.

**2. Oferta de Implantação**  
Após a escolha do plano, é exibida uma tela com a oferta de implantação como um serviço adicional.  
**Objetivos:**
- Incentivar a adesão ao serviço de implantação.
- Mostrar os benefícios da implantação para o cliente.
- Aumentar a receita.

**3. Carrinho e Checkout**  
O cliente pode:
- Visualizar ofertas de planos anuais.
- Preencher os dados de contato.
- Escolher a forma de pagamento: **Pix**, **Cartão de Crédito** ou **Boleto Bancário**.

**3.1 Pagamento com Pix**  
Caso o cliente escolha a opção **Pix**, ele será redirecionado para uma tela que contém:
- Um **contador regressivo de 30 minutos**.
- Um **QR Code** para pagamento.
- Um **campo de "copia e cola"** do código Pix.

Para fins de demonstração, após **30 segundos**, o pagamento é automaticamente marcado como concluído.

**4. Confirmação de Pagamento**  
Após a finalização do pagamento, o cliente é redirecionado para uma tela de confirmação, encerrando o fluxo de compra.

---



Ou, se estiver navegando pela interface, utilize o menu e selecione a opção **"Preços"** para ser redirecionado à tela de seleção de planos.

---

## ✅ Tecnologias Utilizadas

- Vue.js  
- Vuetify  
- JavaScript  
- HTML/CSS
