import styled from "styled-components"

export const StyledDetails = styled.div`

  .custom-bg {
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;

    img {
      width: 280px;
      border-radius: 10px;
    }
  }

  .bg {
    background-image: linear-gradient(to right,rgb(24 20 20) 150px, rgb(0 0 0 / 84%) 100%);
  }

  .infos {
    display: flex;
    justify-content: center;
  }

  .image {
    padding: 3rem;
    height: 500px;
  }

  .title {
    margin-bottom: .5rem;
  }

  .content {
    display: flex;
  }

  .facts, .facts-infos {
    display: flex;
    
  }

  .facts-infos {
    padding: 0 1rem 0 1rem;

    span {
      padding: .5rem;
    }
  }
`