<h1 align="center">Sobre Mim</h1>
<h2>Projeto desenvolvido durante o curso "React: desenvolvendo em React Router com JavaScript" da Alura</h2>

![DependencyReact](https://img.shields.io/badge/ReactJs-%5E18.2.0-green)
    - ![DependencyAntD](https://img.shields.io/badge/antd-%5E5.2.0-green)
    - ![DependencyAntdIcons](https://img.shields.io/badge/%40ant--design%2Ficons-%5E5.0.1-green)
    - ![DependencyReactRouterDom](https://img.shields.io/badge/react--router--dom-%5E6.8.1-green)

Diferenciar o comportamento de sites tradicionais e de SPAs;

Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.
Utilizar o componente Link do react-router-dom;

Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.
Utilizar o hook useLocation;

Com ele, podemos obter informações da rota que estamos atualmente.
Utilizar o componente NavLink do react-router-dom.

Com ele, temos acesso direto à informação do link estar ativo ou não.
/*/---
Identificar quando utilizar rotas aninhadas;

Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Não queríamos que o Banner aparecesse na página 404.
Utilizar o componente Outlet;

A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.
Utilizar o atributo index do Route;

O index indica que o caminho da rota é igual ao da rota pai.
Diferenciar caminhos relativos e absolutos.

Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai.
/*/
Identificar quando utilizar rotas dinâmicas;

Rotas dinâmicas são úteis quando queremos ter uma mesma estrutura de página e mudar seu conteúdo de acordo com alguma informação passada na URL. No nosso caso, passamos o id de um post pela URL, buscamos o post de acordo com o id e mostramos suas informações na tela.
Utilizar os seletores de rotas dinâmicas para criar uma rota dinâmica;

Utilizamos a sintaxe /caminho/:nomedoparametro no atributo path de uma Route.
Utilizar o hook useParams.

Com ele, obtemos os parâmetros passados para uma rota dinâmica.
/*/
Componentizar um botão;

Criamos o componente BotaoPrincipal, que recebe props que definem seus estilos.
Utilizar o hook useNavigate;

Podemos utilizá-lo para fazer navegações mais complexas, como voltar para a página anterior no navegador.
Tratar o caso de post não encontrado;

Utilizamos o componente NaoEncontrada para quando um post não era encontrado. Vimos duas possíveis soluções para reutilizar o componente PaginaPadrao apenas quando um post era encontrado. Uma delas é aproveitando o Outlet e adicionando os componentes Routes e Route dentro do componente Post; outra é adicionando {children} em PaginaPadrao e permitindo ele possa ser utilizado como um componente pai direto.