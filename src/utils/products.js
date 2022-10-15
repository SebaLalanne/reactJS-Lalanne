export const products = [
    {id: 1 , title:'Alimento Adult Medium' , category:"alimentos" , description:'alimento para adultos' , price: 7800 , pictureUrl: 'https://puppis.vteximg.com.br/arquivos/ids/172560-1000-1000/156157-1.jpg?v=637350102317070000' , stock:'number'},
    {id: 2 , title:'Alimento Adult X-Small' , category:"alimentos" , description:'string' , price: 1800 , pictureUrl: 'https://cdn.royalcanin-weshare-online.io/Oz_ZG3sBRYZmsWpc87i1/v5/ar-l-producto-x-small-adult-size-health-nutrition-seco-jpg?w=500&' , stock:'number'},
    {id: 3 , title:'Soga Hueso' , category:"accesorios" , description:'string' , price: 800 , pictureUrl: 'https://puppis.vteximg.com.br/arquivos/ids/177325-1000-1000/275286.jpg?v=637567929859700000' , stock:'number'},
    {id: 4 , title:'Pato de Goma' , category:"accesorios" , description:'string' , price: 295 , pictureUrl: 'https://puppis.vteximg.com.br/arquivos/ids/186297-1000-1000/269259.jpg?v=637854765726170000' , stock:'number'},
]

export const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve(products);
        },2000)
       
    })

    return promise
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt (id) )
        setTimeout(() => {
            return resolve (result);
        },2000)
    })

    return promise 
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise ((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve(results);
        },2000)
       
    })

    return promise
};