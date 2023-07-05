import { FC } from "react";
import Wrapper from "./components/Wrapper";
import { observer } from "mobx-react-lite";

const App: FC = observer(() => {

  return (
    <>
      <Wrapper />
    </>
  );
})

export default App;