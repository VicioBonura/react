//comportamento NON bloccante
(() => {
const run = async () => {
    console.log("1. Promise.then example");
    console.log("2. Start");
    const promise = new Promise((resolve, reject) => {
        console.log("3. Promise Started");
        setTimeout(() => {
            console.log("4. Promise Resolving");
            resolve("5. Promise Resolved");
        }, 3000);
    });

    promise.then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("7. Finally");
    });
    console.log("6. End");
    };

    run();
})();
