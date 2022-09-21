let promiseOk = true;

let CustomFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(promiseOk) {
                resolve(task)
            } else {
                reject("Hay un error")
            }
        }, time)
    })
}
export default CustomFetch;