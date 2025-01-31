function customReact(reactElement,container){
        let newElement=document.createElement(reactElement.type);
        // newElement.innerHTML=reactElement.children;
        // newElement.setAttribute('href',reactElement.props.href);
        // newElement.setAttribute('target',reactElement.props.target);
        // container.appendChild(newElement);

        newElement.innerHTML=reactElement.children;
        for(let prop in reactElement.props){
            newElement.setAttribute(prop,reactElement.props[prop]);
        }
        container.appendChild(newElement);
}
let reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
let container=document.querySelector('#root');
customReact(reactElement,container);