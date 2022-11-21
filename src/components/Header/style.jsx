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
    max-width: 425px;
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
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
    background-color: #E5E5E5;
  }

  button {
    cursor: pointer;
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #01B4E4;
    color: #90CEA1;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
    border-left: 1px solid #E5E5E5;
    width: 40px;
    height: 40px;
    padding: 0 1rem 0 1rem;
    
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`