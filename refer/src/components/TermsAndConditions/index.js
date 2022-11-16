import styled from "styled-components";

const  index =()=> {
  return (
      <Wrap>
        <Font> Terms & Conditions</Font>
    </Wrap>
  )
}

export default index

const Wrap = styled.div`
    font-family:var(--font-family);
    font-weight:600;
    font-size:1rem;
    color:var(--violet)
    `
 const Font = styled.div`
    padding: 0 11.6rem;
    margin-top:1.2rem;
    cursor:pointer;

    @media screen and (max-width: 700px){
        margin: 2rem 0;
        padding:0 2.25rem;
    }

`
