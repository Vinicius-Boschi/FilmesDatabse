import styled from "styled-components"

export const StyledMenu = styled.main `

    .content {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 3rem;
        margin-top: 2rem;
    }

    .infos {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 0.25rem;
    }

    img {
        width: 100%;
        height: 300px;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }

    .card-body {
        background-color: #FFF;
        padding: 10px;
    }

    .name-movie {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 2;
    }

    .date-movie {
        color: #999;
        font-size: .9rem;
    }
`