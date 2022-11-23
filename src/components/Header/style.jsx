import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background-color: #0d253f;

  h1 {
    background-image: linear-gradient(to left, #01b4e4, #90cea1);
    background-clip: text;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    color: #1ED5A9;
  }

  .input-search {
    display: flex;
    border: 1px solid rgba(56, 56, 56, 0.416);
    max-width: 350px;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;

    @media (max-width: 800px) {
      width: 60%;
    }
  }
  
  input {
    width: 100%;
    padding: 4px 6px;
    border: none;
    border-radius: 8px;
    outline: none;
    background-color: #E5E5E5;
  }
`