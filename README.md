# Exercício 7
## tema:Nesse exercício vai ser abordado a configuração da interface do react utilizando o reactstrap 
### aluno: igor pereira
### professor thiago nogueira
### data:21/11/2024
no final deste exercício, conseguimos configurar nosso projeto React para usar o Reactstrap e adicionar uma barra de navegação funcional. Durante o processo, aprendemos como integrar e personalizar componentes de interface com o Reactstrap. Também documentamos as alterações no projeto e usamos o Git para versionar nosso código, garantindo que todas as modificações fossem registradas corretamente.

![texto alternativo](atv.png)

Para fazer essa alteração no react foi utilizado um codígo no html e esse codígo foi utilizado o reactstap:  

import { Navbar, NavbarBrand } from 'reactstrap';

< Navbar dark color="primary">  
 < div className="container">  
 < NavbarBrand href="/">Ristorante Con Fusion< /NavbarBrand>  
 < div>Aluno: Fulano de Tal</ div>  
 < /div>  
< /Navbar->  

import { Navbar, NavbarBrand } from 'reactstrap';

Este comando importa os componentes Navbar e NavbarBrand da biblioteca reactstrap.  
< Navbar dark color="primary" >

O componente < Navbar > é utilizado para criar a barra de navegação.
dark aplica um tema de cores escuras à barra de navegação no caso utilizou um fundo escuro.

color="primary" define a cor do fundo da navbar como a cor primária do Bootstrap, que é um tom de azul.  
< div className="container" >

A < div className="container" > é uma estrutura do Bootstrap que centraliza e ajusta o conteúdo dentro de um limite de largura fixa.  

< NavbarBrand href="/">Ristorante Con Fusion</ NavbarBrand>

O componente < NavbarBrand > é usado para exibir o nome ou título da aplicação dentro da barra de navegação.  

href="/" define o link do título, que normalmente redireciona para a página inicial ("/").  

< div>Aluno: Fulano de Tal< /div>

Este < div> contém um texto personalizado, onde você pode substituir "Fulano de Tal" pelo seu nome.  
< /Navbar>

Fecha o componente < Navbar>, finalizando a barra de navegação.
Resumo: