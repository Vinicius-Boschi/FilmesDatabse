import styled from "styled-components"

export const StyledDetails = styled.div`
  .custom-bg {
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;

    img {
      width: 280px;
      border-radius: 10px;
    }
  }

  .bg {
    background-image: linear-gradient(
      to right,
      rgb(24 20 20) 150px,
      rgb(0 0 0 / 84%) 100%
    )
  }

  .infos {
    display: flex;
    justify-content: center;
  }

  .content {
    display: flex;
    justify-content: center;
  }

  .image {
    padding: 3rem;
    height: 500px;
  }

  .posters-infos {
    width: 60%;
  }

  .titles {
    padding: 4rem;
  }

  .title {
    font-size: 2.2rem;
  }

  .title,
  .facts,
  .tagline {
    margin-bottom: 0.5rem;
  }

  .facts,
  .facts-infos {
    display: flex;
    align-items: center;
  }

  .facts-infos {
    padding: 0 1rem 0 1rem;

    span {
      padding: 0.5rem;
      font-size: 1.1rem;
    }
  }

  .hour {
    letter-spacing: 3px;
  }

  .tagline {
    font-size: 1.1em;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
  }

  .synopsis {
    font-size: 1.5rem;
    margin: 1rem 0 1rem 0;
  }

  .overview {
    p {
      line-height: 1.5;
    }
  }

  .enterprises {
    list-style-type: none;
    margin-top: 2rem;

    li {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 2rem;
    }

    img {
      max-width: 1000px;
      width: 25%;
    }
  }
`