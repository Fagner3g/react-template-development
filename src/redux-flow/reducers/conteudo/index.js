import createReducer from '../create-reducer'

const initialState = {
    list: ['Aluno', 'Professor', 'Coordenador', 'Diretor']
}

const conteudo = createReducer(initialState, {})

export default conteudo