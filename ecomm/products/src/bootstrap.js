import faker from 'faker';


const mount = (el)=> {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker. commerce.productName();
        products += `<div>${name}</div>`;
    }
    // document.querySelector('#dev-products').innerHTML = products;
    el.innerHTML = products;
    //ReactDOM.render(<App />, el);
};
// Context/Situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// Which DEFINETLY has an element with an id of 'def-products
// we want to immediately render oup app into that element

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming out container doesnt have an element
    // with id 'dev-products'....

    if (el) {
        // We are probably running in isolation
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through the container app
// NO GUARENTEE that an element with han id of 'dev-products' exist
// WE DO NOT WANT try to immediately render the app

export { mount };