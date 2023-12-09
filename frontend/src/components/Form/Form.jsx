import React from "react";
import * as C from './Styles'

const Form = ({ theme }) => {
    return (
        <C.Main theme={theme}>
            <C.Title theme={theme}>Olá Pequeno Gafanhoto</C.Title>

            <C.Form theme={theme}>
                <C.InputUsuario type="text" placeholder="Usuário" theme={theme} />
                <C.InputSenha type="password" placeholder="Senha" theme={theme} />

                <C.Submit theme={theme}>Entrar</C.Submit>

                <C.Forgot theme={theme}>
                    <C.A theme={theme}>Esqueceu a senha?</C.A>
                </C.Forgot>
            </C.Form>
        </C.Main>
    )
}

export default Form