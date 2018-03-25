# Teste Conta Azul
## Aplicação Cards Weather Now

A aplicação foi desenvolvida com base no **pdf** que está na pasta **docs**, segui os layouts e as regras para funcionamento do projeto. **Para ver online Acesse [http://thiagoadriano.com.br/projetos/weathernow-contaazul/](http://thiagoadriano.com.br/projetos/weathernow-contaazul/)**

Eu iniciei o projeto na branch de nome **develop** por estar usando um processo de gitflow que é o que uso normalmente.

> Usei as tecnologias:
>
> * HTML5
> * Sass com CSS3
> * AngularJS 1.6.9 como suporte ao JavaScript
>   * Usei esta versão por se tornar mais próxima ao que estão usando nos projetos
>   * Nesta versão também consegui mostrar o meu workflow pois não foi usado um cli que gerasse isso, adicionei os itens manualmente
> * Karma e Jasmine nos testes
> * Gulp automatização de tarefas


## Para rodar o pojeto:

#### É necessário ter instalado
1. [NodeJS](https://nodejs.org/en/)
1. [Git](https://git-scm.com/)
1. [Gulp-cli](https://gulpjs.com/)

Após instalar NodeJs e o Git, abra o terminal Bash que iremos baixar o projeto para o diretório de sua escolha. 
Após abrir o  diretório execute o comando:

```
git clone https://github.com/thiagoadriano/teste-contaazul-cardweather.git
```
 
Com isso obterá uma cópia do projeto em sua máquina.
Ao  terminar o processo de baixar o projeto, pelo terminal acesse a pasta usando o comando:

```
cd teste-contaazul-cardweather
```

Dentro do diretório executaremos o próximo comando:

```
npm start
```

Este comando irá executar alguns processos que seriam:

* A instalação do _gulp-cli_ depois
* Instalação dos módulos do projeto 
* E execução do projeto abrindo no navegador



> ### Observeção em caso de erro:
> Pode ser necessário a instalação do gulp-sass onde o mesmo depende da instalação do python, para isto:
>  * instale o Python 2.7. [Baixe clicando aqui](https://www.python.org/ftp/python/2.7.14/python-2.7.14.msi)
>  * Após instalção, execute o comando
```
npm i gulp-sass
```



Apos o processo de compilar com sucesso e o projeto não rodar automaticamente no navegador, abra uma nova aba copie e cole a url abaixo:

```
http://localhost:3000
```

Caso queira rodar os testes, pode executar em um outro terminal dentro do root do projeto o seguinte comando:

```
npm run coverage
```

Para finalizar o terminal basta executar o comando:

```
CTRL + C (2 vezes)
```

## Arquivos de fonte do código
* Na pasta **src** contém os arquivos que contemplam todo o funcionamento, que no caso, é o código fonte do projeto.
* Na pasta **gulp-tasks** são as terefas que executam para start do projeto e para ficar vigiando as alterações nos arquivos finais
* A pasta **covarage** e a pasta **tests** cuidam dos testes automatizados
* Na pasta **test/covarage** pode abrir o arquivo **index.html** para visualizar o status dos testes
* A pasta **.dev** é a pasta que é criada com os arquivos já compilados e concatenados para rodar no navegador
* Os arquivos que estão na raiz são configuradores e gerenciadores das dependências  

Em caso de qualquer dúvida ou não execução estarei a disposição para resolver o quanto antes para que não quebre a avaliação dos senhores.
