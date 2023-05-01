import styled from 'styled-components'

export const HomeContainer = styled.div`
    background: #fff;
    border-radius: 32px 0 0 0;
    width: 100%;
    height: 100vh;
`

export const Container = styled.div`
    padding: 3.7rem;
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
`

export const HeaderContent = styled.header`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    color: #7C7C8A;

    h1 {
        color: #403937;
    }
`
export const Avatar = styled.div`
    width: 3rem;
    height: 3rem;
    background: #7C3AED;
    border-radius: 999px;
`

export const SearchContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
`

export const Button = styled.button`
    width: 8.4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .7rem;
    background: #7C3AED;
    color: #fff;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
`

export const FormContainer = styled.form`
    color: #505059;
    display: flex;
    align-items: center;
    gap: .5rem;

    input {
        width: 20rem;
        height: 3rem;
        padding: .5rem;
        border: 0;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #7C7C8A;
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    div {
        margin-bottom: 1rem;
    }
`