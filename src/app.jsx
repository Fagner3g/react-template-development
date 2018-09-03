import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Header from 'components/header'
import Content from 'components/content'

const App = () => (
    <Container>
        <Header />
        <Content />
    </Container>
)

injectGlobal`
    html, body, div[data-js="app"]{
        height: 100%;
    }
`

const Container = styled.div`
    height: 100%;
`
export default App