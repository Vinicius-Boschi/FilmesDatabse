import styled from "styled-components"

export const StyledMenu = styled.main `

    .content {
        display: flex;
        flex-wrap: wrap;
        padding: 3rem;
        margin-top: 2rem;
    }

    .infos {
        display: flex;
        word-wrap: break-word;
        gap: 2rem;
        background-clip: border-box;
        border-radius: 0.25rem;
    }

    .card-image {
        border: 1px solid #0000001f;
        background-color: #FFF;
    }

    img {
        width: 100%;
        height: 300px;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }

    .card-body {
        padding: 10px;
        margin-bottom: 1rem;
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