import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  const list = [];
  for (let i in state) {
    list.push(<p>{state[i]}</p>);
  }

  return (
    <div>
      <h1>DetailA</h1>
      {list}
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
