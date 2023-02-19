Componentizar um botão;

Criamos o componente BotaoPrincipal, que recebe props que definem seus estilos.
Utilizar o hook useNavigate;

Podemos utilizá-lo para fazer navegações mais complexas, como voltar para a página anterior no navegador.
Tratar o caso de post não encontrado;

Utilizamos o componente NaoEncontrada para quando um post não era encontrado. Vimos duas possíveis soluções para reutilizar o componente PaginaPadrao apenas quando um post era encontrado. Uma delas é aproveitando o Outlet e adicionando os componentes Routes e Route dentro do componente Post; outra é adicionando {children} em PaginaPadrao e permitindo ele possa ser utilizado como um componente pai direto.