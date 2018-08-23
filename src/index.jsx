import React from 'react'
import ReactDom from 'react-dom'
import App from './main/app'

ReactDom.render(<App />, document.getElementById('app'))

module.hot.accept(); //Atualiza somente o componente modificado