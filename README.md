## Mini-Hackaton do [Diego Pinho](https://github.com/DiegoPinho)

![olaf na praia](./assets/images/olaf-verao.gif)

Inspirado pelo calor de matar, [Diego Pinho](https://github.com/DiegoPinho)
resolveu passar um Hackaton para seus alunos da Driven sobre o tema 
do clima ☀️🌤️🌦️.

- **Objetivo** 🎯
    - Criar uma solução web que mostre a temperatura e condições gerais do clima baseados na localização do usuário (e/ou do local que ele indicar) da forma mais criativa e interessante possível.
- **Requisitos mínimos** 📒
    - A aplicação deve pedir a autorização do usuário (via navegador) para buscar a localização dele e então exibir as informações de clima naquela determinada área.
    - O usuário deve ser capaz de buscar as informações de clima da sua localização MESMO se rejeitar a permissão. Para isso, a aplicação deve oferecer uma forma do usuário inserir seus dados de localização.
    - As informações de temperatura devem ser exibidas em CELSIUS.
- **Como fazer?** 🖥️
    - Para obter as informações sobre o clima, use a *Current Weather Data API* da [Open Weather Data](https://openweathermap.org/api).
    - A documentação completa da API [está aqui](https://openweathermap.org/current).
    - Faça uso das [Weather Condicions Icons](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2) para exibir ícones que correspondem ao clima atual.
    - Use a [Geolocation API](https://www.w3schools.com/html/html5_geolocation.asp) para buscar a localização do usuário. Obs.: Essa função tem grandes chances de ser assíncrona.
- **Guideline** 🧭
    - Explore a API primeiro! Se estiver em grupo, faça isso com a tela compartilhada. Depois de entender o que a API está devolvendo, vale pensar na tela e possivel divisão de tarefas.
    - Elabore pelo menos um rascunho (feio mesmo, nada de figma!) de como sua tela será, isso facilitará o processo de elaboração do código.
    - Não sabe como algo funciona? Procure exemplos na internet! Lembre-se que o MDN, StackOverflow e W3Schools são ótimas referências.
