async function getData(un){
    try {
        const ans = await fetch(`https://api.github.com/users/${un}`)

        if(!ans.ok)
            throw new Error(un," Not found");

        const data = await ans.json();
        console.log(data);
    } catch(error) {
        console.error("Error: ",error.message);
    }
}

const userName = process.argv.slice(2);
getData(userName);