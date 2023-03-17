import LoadingStyled from "./style";

import InfinityLoading from "../../Assets/Img/InfinityLoading.svg";

const Loading = () => {
  return (
    <LoadingStyled>
      <img src={InfinityLoading} alt="...loading" />
    </LoadingStyled>
  );
};

export default Loading;
