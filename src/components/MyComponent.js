const MyComponent = ({ value, name, saludar, children}) =>{
    //console.log (value);
    //console.log(name);
    //console.log(children)
    //saludar()

    const task = new Promise( (resolve, reject) => {
        reject('Error: dato no encontrado')
        //setTimeout(() => {
        //    resolve({ id: 0, name: 'Pizza'})    
       // }, 1000);
        
    })

    console.log(task);

    task.then( (result) => {
        console.log(result);
    }).catch( (error) => {
        console.error(error);
    })

    return (
        <>
        <h1>Este mi componente {name}</h1>
        {children}
        </>
    )

};

export default MyComponent;