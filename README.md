## Test DTO

Essa é uma aplicação feita com o intuito de testar algumas escolhas de implementação de DTO's, estrutura de pastas e etc.

### Nesta Branch

Nesta branch foi utilizada uma abordagem mais "padrão" para utilização de DTO's e utilização de facilidades do nestjs/swagger como PartialType, OmitType e PickType. Na estrutura de pastas desta branch cada módulo possui uma pasta "dtos", onde cada DTO foi armazendo em uma subpasta de acordo com sua função. A subpasta "request" contém os DTO's utilizados como corpo das requisições, já a subpasta "response" contém os DTO's utilizados como respostas.
