import { mount as ProductsMount } from 'products/ProductsIndex';
import { mount as CartMount } from 'cart/CartShow';

console.log('Container!');

ProductsMount(document.querySelector('#dev-products'));
CartMount(document.querySelector('#my-cart'));