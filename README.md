# minha-consultoria-equipes

[[TOC]]

## Projeto

O minha-consultoria-equipes é um projeto Web desenvolvido como solução do Challenge Sprint 4 do 2o ano do curso de Sistemas de Informação na FIAP.

Este projeto é codificado em NodeJS e utiliza o framework [Nest](https://github.com/nestjs/nest), no padrão MVC.

### Resumo das tecnologias utilizadas

- Nest v10.0.0
- Jest v28.1.3
- NodeJS v20.17.0
- NPM v10.8.2

## Preparação do ambiente

- Clone o projeto na sua máquina:

```bash
git clone https://github.com/jamilligioielli/minha-consultoria-equipes.git
```

- Instale a [versão 20.17.0 LTS do NodeJS](https://nodejs.org/download/release/v20.17.0/) *[*Node.js + NPM*](https://nodejs.dev/en/learn/how-to-install-nodejs/)*;
  - Opte pela instalação via [NVM](https://github.com/nvm-sh/nvm) para gerenciar suas versões do NodeJS caso já tenha alguma versão anterior na sua máquina.
  - Se nunca tiver instalado o NodeJS na sua máquina [baixe aqui pelo site oficial](https://nodejs.org/en/download/prebuilt-installer) e siga as instruções de instalação.

Após baixar e configurar o node, dentro da pasta do projeto, instale as dependencias locais:

`npm install`

## Aplicação

### Variaveis de ambiente

As configurações sensiveis (credenciais de banco de dados) desse projeto ficam em variaveis de ambiente que estão localizadas no arquivo `.env`.

O conteudo padrão do arquivo `.env` se encontra no arquivo `.env.defaults`, para copiá-lo basta inserir o seguinte comando no terminal:

```bash
# No Linux/MAC:
cp .env.defaults .env

# No Windows:
copy .env.defaults .env
```

Após isso, preencha o conteúdo desse arquivo de acordo com suas credenciais.

### Executando locamente

Para rodar o projeto locamente, digite o seguinte comando no terminal:

```bash
# Desenvolvimento local
npm run start:dev

```

> **Endereço local**:
[http://localhost:3000/](http://localhost:3000/)

## Descrição das pastas

- public
  - onde ficarão os arquivos de imagem e css do projeto
- config
  - onde estão as constantes de configuração
- views/layouts
  - parte visual do sistema, onde ficarão as páginas propriamente ditas
  - deve criar um arquivo .hbs para cada página
- src/services
  - ficarão os serviços que fazem contato direto com o banco de dados; para execução das queries
- src/models
  - classes de entidade do banco de dados. todas devem terminar com .entity.ts
    - exemplo: consultor.entity.ts
- src/modules
  - funcionalidades que serão utilizadas nas views
    - nos arquivos .controller.ts, ficam as especificações de rotas daquela funcionalide e valores que poderão ser utilizados diretamente pelas views
      - podem consumir os services
    - os arquivos .module.ts expoem os controllers para uso de outras classes
