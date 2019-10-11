### Github users api

## Para executar é necesário ter instalado o node ^10 e npm ^6

### Commandos
| Command |
| --- | --- |
| `npm install` | Instala das dependências necessárias |
| `npm start` | Inicia o servidor |
| `npm t` | Roda todos os testes |

### Rota

GET `/api/users?name=abc123`
[
     {
        "id": 1,
        "login": "abc123",
        "repos_url": "https://api.github.com/users/abc123/repos",
        "repos": [
            {
                "id": 79038661,
                "name": "awesome-movies",
                "stargazers_count": 8
            }
        ]
}

### Framework utilizado 
Express

### Arquitetura utilizada
Arquitetura de camadas

https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf#architecture