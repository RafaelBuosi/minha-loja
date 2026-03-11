# 🛒 MinhaLoja - Angular 21

Uma interface de loja moderna desenvolvida como parte de um estudo acadêmico com Angular. O projeto foca em componentes reutilizáveis, gerenciamento de estado reativo com **Signals** e uma experiência de usuário fluida com suporte nativo a **Modo Escuro**.

---

## 🚀 Tecnologias Utilizadas

* **Angular 21**: Framework principal utilizando componentes Standalone.
* **Bootstrap 5.3**: Estilização e sistema de grid responsivo.
* **Bootstrap Icons**: Biblioteca de ícones.
* **Signals API**: Gerenciamento de estado moderno para inputs e reatividade.
* **TypeScript**: Lógica de programação tipada.

---

## 🛠️ Funcionalidades Implementadas

### 1. Gestão de Produtos (Cards)
* Componentização de itens de vitrine utilizando `@Input` reativos.
* Tratamento de disponibilidade (estoque) com lógica visual dinâmica.
* Ciclo de vida de componentes (`ngOnInit`) para monitoramento de instâncias.

### 2. Cadastro Dinâmico
* Formulário com **Two-way Data Binding** (`[(ngModel)]`).
* Validação simples de interface (Botão salvar habilitado apenas com dados válidos).
* Lista de produtos em tempo real utilizando a diretiva `@for`.
* Formatação de moeda brasileira com `CurrencyPipe`.

### 3. Interface Adaptável (Dark Mode)
* Sistema de troca de tema (Claro/Escuro) integrado ao Bootstrap 5.3.
* Persistência visual através de **Signals** e **Effects**.
* Logotipo e ícones reativos que mudam de cor e forma conforme o tema escolhido.

---

## 📦 Como executar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Angular CLI](https://angular.io/cli) instalados.
2. Clone o repositório:
   ```bash
   git clone [https://github.com/rafaelbuosijardim/minha-loja.git](https://github.com/rafaelbuosijardim/minha-loja.git)
