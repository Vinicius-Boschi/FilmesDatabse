import styled from "styled-components"

export const StyledMenu = styled.main `

    .content {
        padding: 3rem;
        margin-top: 2rem;
    }

    .infos {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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
        height: 350px;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }

    img:hover {
        opacity: .9;
        transform: translateY(-10px);
        transition: all .5s ease-in-out;
        cursor: pointer;
    }

    img:not(:hover) {
        transition: all .5s ease-in-out;
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

    @media screen and (max-width: 768px) {
        .infos {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
        .infos {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`