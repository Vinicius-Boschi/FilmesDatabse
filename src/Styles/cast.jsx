import styled from 'styled-components'

export const StyledCast = styled.div`
    .content {
        padding: 1rem;
    }

    .title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .list {
        width: calc(100vw - 16px * 4);
        display: grid;
        grid-gap: 32px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(200px, 1fr);
    }

    li {
        list-style-type: none;
        background-color: #FFF;
    }

    img {
        object-fit: cover;
        max-width: 200px;
        height: auto;
        width: 100%;
    }

    .infos-characters {
        width: 60%;
        padding: .5rem;
    }

    .name {
        font-weight: bold;
        margin-top: 5px;
        line-height: 1.3;
    }

    .character {
        font-size: .9rem;
        margin-top: 7px;
    }
`