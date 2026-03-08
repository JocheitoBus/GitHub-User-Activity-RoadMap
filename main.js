async function getData(un){
    try {
        const ans = await fetch(`https://api.github.com/users/${un}/events`)

        if(!ans.ok)
            throw new Error(un," Not found");

        const data = await ans.json();
        data.slice().forEach(evento => {
            console.log(`Tipo: ${evento.type} | Repo: ${evento.repo.name} | Fecha: ${evento.created_at}`);
        });
    } catch(error) {
        console.error("Error: ",error.message);
    }
}

const userName = process.argv.slice(2);
getData(userName);