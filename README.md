# Vision Assist AI

Landing page desenvolvida em **React** para apresentar o Vision Assist AI, uma solução de percepção e mobilidade voltada a estudantes universitários com deficiência visual.

O Vision Assist AI utiliza a câmera do smartphone e inteligência artificial para interpretar informações relevantes do ambiente e transformá-las em **orientações sonoras curtas e contextualizadas**, auxiliando o estudante durante seus deslocamentos pelo ambiente universitário.

> **Mais informação para que você precise de menos ajuda.**

A aplicação desenvolvida nesta Sprint é uma **landing page**, criada para apresentar o problema, a proposta de valor, o funcionamento conceitual, o MVP e os diferenciais da solução.

---

## 🎯 Objetivo do projeto

O projeto tem como objetivo apresentar uma solução tecnológica voltada à **orientação e percepção do ambiente universitário por estudantes com deficiência visual**.

A proposta parte de um problema específico: determinadas informações ambientais são obtidas visualmente de forma imediata por pessoas videntes, mas podem ser de difícil acesso para pessoas com deficiência visual. O Vision Assist AI busca transformar essas informações em dados acessíveis por áudio.

A solução não pretende substituir a capacidade de orientação do usuário ou tomar decisões por ele. A IA fornece informações para que o próprio estudante possa interpretar o ambiente e decidir como prosseguir com maior autonomia.

---

## ✨ Principais funcionalidades apresentadas

A landing page apresenta as principais funcionalidades planejadas para o MVP do Vision Assist AI:

* **Reconhecimento contextual do ambiente** — identificação de elementos relevantes para orientação e mobilidade.
* **Leitura de textos e sinalizações** — identificação de placas, números de salas, nomes de ambientes e outras informações relevantes.
* **Detecção de obstáculos** — identificação e alerta sobre obstáculos relevantes para o deslocamento.
* **Consulta por voz** — possibilidade de solicitar informações sobre o ambiente por meio de comandos de voz.
* **Feedback de áudio contextual** — apresentação das informações relevantes de forma curta, objetiva e no momento adequado.

---

## 🛠️ Tecnologias utilizadas

* **React 19** — desenvolvimento da interface e organização dos componentes.
* **JavaScript (JSX)** — implementação da lógica e estrutura dos componentes.
* **Vite 8** — ferramenta de desenvolvimento e build da aplicação.
* **CSS3** — estilização da interface, com arquivos CSS separados por componente.
* **ESLint** — análise estática e padronização do código.

---

## 📁 Estrutura do projeto

A aplicação foi organizada em componentes React, com uma pasta específica para cada seção da landing page.

```text
src/
└── components/
    ├── Autonomy/
    │   ├── Autonomy.jsx
    │   └── Autonomy.css
    ├── Demo/
    │   ├── Demo.jsx
    │   └── Demo.css
    ├── Differentials/
    │   ├── Differentials.jsx
    │   └── Differentials.css
    ├── Evolution/
    │   ├── Evolution.jsx
    │   └── Evolution.css
    ├── Footer/
    │   ├── Footer.jsx
    │   └── Footer.css
    ├── Header/
    │   ├── Header.jsx
    │   └── Header.css
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.css
    ├── HowItWorks/
    │   ├── HowItWorks.jsx
    │   └── HowItWorks.css
    ├── Journey/
    │   ├── Journey.jsx
    │   └── Journey.css
    ├── MVP/
    │   ├── MVP.jsx
    │   └── MVP.css
    ├── Perception/
    │   ├── Perception.jsx
    │   └── Perception.css
    ├── Problem/
    │   ├── Problem.jsx
    │   ├── Problem.css
    │   └── ProblemCard.jsx
    └── common/
```

A estrutura utiliza **um componente React e seu respectivo arquivo CSS por seção**, favorecendo a organização e a manutenção do código.

---

## ⚙️ Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

* **Node.js 20.19 ou superior**, ou **Node.js 22.12 ou superior**.
* **npm**, que normalmente é instalado junto com o Node.js.

> O projeto utiliza Vite 8, que possui esses requisitos mínimos de versão do Node.js.

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/OctavioMello/Sprint-3-Web-Dev.git
```

Entre na pasta do projeto:

```bash
cd Sprint-3-Web-Dev
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar o projeto

Após instalar as dependências, execute:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e exibirá no terminal o endereço local para acessar a aplicação, normalmente:

```text
http://localhost:5173
```

Abra o endereço indicado no navegador.

---

## 🧪 Como testar a aplicação

Após iniciar o projeto, navegue pela landing page e verifique as principais seções da aplicação:

1. **Hero** — apresentação inicial da solução.
2. **Problem** — apresentação do problema enfrentado pelo público-alvo.
3. **How It Works** — explicação conceitual do funcionamento da solução.
4. **Perception** — apresentação da percepção contextual do ambiente.
5. **Demo** — demonstração conceitual da utilização da solução.
6. **Journey** — representação da jornada do usuário.
7. **Autonomy** — relação da solução com autonomia e tomada de decisão.
8. **MVP** — apresentação das funcionalidades prioritárias.
9. **Differentials** — diferenciais da proposta.
10. **Evolution** — visão de evolução da solução.

Também é possível verificar a responsividade da interface redimensionando a janela do navegador ou utilizando as ferramentas de desenvolvedor do navegador.

---

## 🔐 Usuários e senhas para teste

A aplicação **não possui sistema de autenticação ou login**.

Portanto, **não existem usuários, senhas ou credenciais necessárias** para executar ou testar o projeto.

Todas as seções da landing page são acessíveis diretamente.

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, sem substituir a implementação e as decisões da equipe.

O **ChatGPT** foi utilizado principalmente para **revisão e orientação na criação e organização dos componentes React**, auxiliando na estruturação do código e na identificação de possíveis melhorias.

O **Claude** foi utilizado principalmente no **refinamento da estilização dos componentes**, auxiliando na elaboração e melhoria dos arquivos CSS, incluindo aspectos relacionados à composição visual, espaçamento, responsividade e identidade visual da interface.

As sugestões geradas pelas ferramentas foram analisadas e aplicadas pela equipe, que permaneceu responsável pelas decisões finais, implementação, testes e validação do projeto.

---

## 📜 Scripts disponíveis

O projeto possui os seguintes scripts npm:

### Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite.

### Gerar build de produção

```bash
npm run build
```

Gera a versão otimizada da aplicação para produção na pasta `dist`.

### Visualizar o build de produção

```bash
npm run preview
```

Inicia um servidor local para visualizar a versão de produção gerada pelo build.

### Verificar o código com ESLint

```bash
npm run lint
```

Executa a análise estática do código utilizando ESLint.

---

## 🌐 Deploy

A versão publicada da aplicação está disponível na Vercel:

**https://sprint-3-web-dev-sand.vercel.app/**

O deploy permite acessar e testar a landing page diretamente pelo navegador, sem necessidade de instalação local.

---

## 📌 Repositório

O código-fonte do projeto está disponível no GitHub:

**https://github.com/OctavioMello/Sprint-3-Web-Dev**

---

## 👥 Projeto acadêmico

Projeto desenvolvido como parte da disciplina de **Web Development**, utilizando React e Vite.
