import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'

const Content = ({ conteudo }) => (
    < Main >
        <ul>
            {
                conteudo.map((item) => (<li key={item}>{item}</li>))
            }
        </ul>
    </Main >
)

const Main = Styled.div`
    background: #0ff;
    height: 100%;

`

const mapStateToProps = (state) => ({
    conteudo: state.conteudo.list
})

export default connect(mapStateToProps)(Content)