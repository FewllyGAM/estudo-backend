describe("Music routes", () => {
    it("/music deve retornar todas as músicas e um OK", async () => {
        const response = await fetch("http://localhost:3000/music");

        console.log(await response.text());
        //Testa para saber se deu tudo certo a conexão
        expect(response.status).toBe(200);
    });


    for (let i = 1; i < 30; i++) {
        it(`/music/${i} deve retornar a música dada um ID, e um OK`, async () => {
            const response = await fetch(`http://localhost:3000/music/${i}`);

            //Testa para saber se deu tudo certo a conexão
            expect(response.status).toBe(200);
            //Testa para saber se o a música nesse ID existe
            const text = await response.text();
            console.log(text);
            expect(text).not.toEqual("\"No music found\"");
        })
    }

    it("/users deve retornar todos os usuários e um OK", async () => {
        const response = await fetch("http://localhost:3000/users");

        console.log(await response.text());
        //Testa para saber se deu tudo certo a conexão
        expect(response.status).toBe(200);
    });
    for (let i = 1; i < 9; i++) {
        it(`/users/${i} deve retornar os dados de um usuário dado o ID dele, e um OK`, async () => {
            const response = await fetch(`http://localhost:3000/users/${i}`);

            //Testa para saber se deu tudo certo a conexão
            expect(response.status).toBe(200);
            //Testa para saber se o o usuário nesse ID existe
            const text = await response.text();
            console.log(text);
            expect(text).not.toEqual("\"No user found\"");
        })
        it(`/users/${i}/songs deve retornar os títulos das músicas escutadas pelo usuário e um OK`, async () => {
            const response = await fetch(`http://localhost:3000/users/${i}/songs`);

            console.log(await response.text());
            //Testa para saber se deu tudo certo a conexão
            expect(response.status).toBe(200);
        })
        it(`/users/${i}/songs deve retornar os gêneros das músicas escutadas pelo usuário e um OK`, async () => {
            const response = await fetch(`http://localhost:3000/users/${i}/genres`);

            console.log(await response.text());
            //Testa para saber se deu tudo certo a conexão
            expect(response.status).toBe(200);
        })
        it(`/users/${i}/songs deve retornar o título da música mais escutada pelo usuário e um OK`, async () => {
            const response = await fetch(`http://localhost:3000/users/${i}/songs/favorite`);

            console.log(await response.text());
            //Testa para saber se deu tudo certo a conexão
            expect(response.status).toBe(200);
        })
    }
})