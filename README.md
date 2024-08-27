 Desafio Codificador

Este projeto é uma aplicação web que permite aos usuários criptografar e descriptografar mensagens de texto usando um simples sistema de substituição de caracteres. O objetivo principal é criar uma interface fácil de usar onde os textos inseridos podem ser codificados e decodificados, mantendo o texto seguro ou legível conforme a necessidade.

 Funcionalidades

- Criptografar Texto**: Converte um texto inserido em uma versão criptografada usando as seguintes regras:
  - `e` -> `enter`
  - `i` -> `imes`
  - `a` -> `ai`
  - `o` -> `ober`
  - `u` -> `ufat`

- Descriptografar Texto: Converte um texto criptografado de volta ao formato original usando as regras acima.

- Copiar Texto: Permite que o usuário copie o texto criptografado ou descriptografado para a área de transferência com um clique.

Regras de Validação

- Apenas letras minúsculas e sem acento são aceitas.
- Se o texto não atender a essas regras, uma mensagem de erro será exibida.

Estrutura do Projeto

- **index.html**: Estrutura básica do HTML e layout da página.
- **style.css**: Arquivo de estilos para a formatação e aparência da página.
- **script.js**: Contém toda a lógica de criptografia, descriptografia, validação e manipulação do DOM.

Como Usar

1. Digite ou cole o texto na área de entrada.
2. Clique em "Criptografar" para converter o texto em uma versão criptografada.
3. Clique em "Descriptografar" para converter o texto criptografado de volta ao original.
4. Use o botão "Copiar" para copiar o texto gerado para a área de transferência.



