import styled from "styled-components";

export const App = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => (props.theme === 'dark' ? "#13111b" : "#fff")};

    @media only screen and (max-width: 725px) {
        width: 100%;
    }
`;

export const Main = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 1.5rem;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: ${(props) => (props.theme === 'dark' ? "#201b2d" : "#fff")};

    @media only screen and (max-width: 725px) {
        width: 100%;
    }
`;

export const Title = styled.div`
    padding-top: 40px;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#161A30")};
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const InputUsuario = styled.input`
    width: 76%;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 10px 20px;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-top: 50px;
    text-align: center;
    font-family: "Ubuntu", sans-serif;
    color: ${(props) => (props.theme === "dark" ? "rgb(254, 255, 255)" : "rgb(38, 50, 56)")};
    background-color: ${(props) => (props.theme === 'dark' ? "rgba(255, 247, 247, 0.299)" : "rgba(136, 126, 126, 0.04)")};

    &::placeholder {
        color: ${(props) => (props.theme === "dark" ? "rgb(254, 255, 255)" : "rgb(38, 50, 56)")};
    }

    &:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
    }
`;

export const InputSenha = styled.input`
    width: 76%;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 10px 20px;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    font-family: "Ubuntu", sans-serif;
    color: ${(props) => (props.theme === "dark" ? "rgb(254, 255, 255)" : "rgb(38, 50, 56)")};
    background-color: ${(props) => (props.theme === 'dark' ? "rgba(255, 247, 247, 0.299)" : "rgba(136, 126, 126, 0.04)")};

    &::placeholder {
        color: ${(props) => (props.theme === "dark" ? "rgb(254, 255, 255)" : "rgb(38, 50, 56)")};
    }

    &:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
    }
`;

export const Submit = styled.a`
    cursor: pointer;
    border-radius: 5rem;
    color: #fff;
    background-color: #161A30;
    text-decoration: none;
    width: 76%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Forgot = styled.p`
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 20px;
`;

export const A = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#161A30")};
`