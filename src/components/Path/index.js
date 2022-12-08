import styled from "styled-components";
import { useLocation } from "react-router-dom";
const Path = () => {
const path = useLocation();
let pathnames=''
const getPath=()=>{
  const name = path.pathname;
  if(name=="/enrolled-friends"){
    pathnames=' > Enrolled friends'
  }else{
    pathnames=''
  }
  console.log(pathnames)
}
getPath()

  return (
    <Wrap>
      <Font>
        UI/UX {">"} Refer & Earn{pathnames}
      </Font>
    </Wrap>
  );
};

export default Path;
const Wrap = styled.div`
  margin-left: 8rem;
  h3 {
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  @media screen and (max-width: 700px) {
    margin: 1rem 0rem 1.75rem 1rem;
    padding: 0 1rem 0 1rem;
    h3 {
      font-size: 1rem;
    }
  }
`;
const Font = styled.h3``;
