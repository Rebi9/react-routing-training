import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const array = [...Array(5).keys()];

  const history = useHistory();

  const detailAUrl = "/page1/detailA";
  const onClickDetailA = () => history.push(detailAUrl);

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: detailAUrl, state: array }}>detailA</Link>
      <br />
      <Link to="/page1/detailB">detailB</Link>
      <br />
      <button onClick={onClickDetailA}>detailA</button>
    </div>
  );
};
