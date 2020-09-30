// const element = document.createElement('h1');
// element.innerText = 'Hola putos';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';


// const probarScope = () => {
//     const coso = 'capo';

//     const jsx = <h1>Hola putos desde react</h1>;
//     const element = React.createElement(
//         'a',
//         { href: 'https://pornhub.com'},
//         'Hola, soy los children'
//     );

//     const variables = React.createElement('h1', {}, `Hola, soy un ${coso}`);

     const container = document.getElementById('app');

//     ReactDOM.render([jsx, element, variables], container);
// }

// probarScope()

const jsx = <div>
    <h1>Hola, soy un capo</h1>
    <p>Soy un terrible capo</p>
</div>

ReactDOM.render(jsx, container);