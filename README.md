### meuponto

This is a Firebase project that logs working hours so you can keep track of the time you worked. Simply hit the 'in' or 'out' button to track it.

Este é um projeto no firebase que loga as horas trabalhadas para que você possa saber o tempo que você trabalhou. Simplesmente toque no botão de 'entrada' ou 'saída' para rastrear.

It's a personal project but feel free for pull requests.
É um projeto pessoal mas sinta-se a vontade para fazer pull requests.

Things to improve:

1. - [ ] Get difference between in and out and show working hours. Pegar diferença de entrada e saída e apresentar horas trabalhadas.

App in development using:

- **Ionic 3.18.0**

- **Node 6.11.3**

Update `app.module` with your firebase credentials.

```
AngularFireModule.initializeApp({        
      apiKey: "<<your>>",
      authDomain: "<<your>>",
      databaseURL: "<<your>>",
      projectId: "<<your>>",
      storageBucket: "<<your>>",
      messagingSenderId: "<<your>>"
    })
```
