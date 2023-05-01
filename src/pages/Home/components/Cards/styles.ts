import styled from 'styled-components'

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
        font-size: 1.5rem;
        color: #403937;
    }
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-left: 1.5rem;

    h4 {
        color: #403937;
    }
`
export const Description = styled.p`
    width: 18rem;
    color: #756966;
`

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    p {
        background: #E2D6FF;
        color: #7C3AED;
        padding: .5rem;
        border-radius: 8px;
    }
`