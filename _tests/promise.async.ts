//comportamento bloccante
(() => {
    const run = async () => {
        console.log("1. Promise async/await example");
        console.log("2. Start");
        const promise = new Promise((resolve, reject) => {
            console.log("3. Promise Started");
            setTimeout(() => {
                console.log("4. Promise Resolving");
                resolve("5. Promise Resolved");
            }, 3000);
        });

        const value = await promise;
        console.log(value);
        console.log("6. End");
    };

    run();
})();