import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useFaucetJettonContract } from "../hooks/useFaucetJettonContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
  ButtonYes,
  ButtonNo
} from "./styled/styled";

function clickYes(){
  console.log("errrr: yess")
}

function clickNo(){
  console.log("errrr: noooo")
}
export function MainTable() {
  const { connected } = useTonConnect();
  const { jettonWalletAddress, balance } = useFaucetJettonContract();

  return (
    <Card title="Jetton">
      <h1>Play now</h1>
      <FlexBoxCol>
        <FlexBoxRow>
       
        </FlexBoxRow>
        <FlexBoxRow>
          <ButtonYes
            onClick={ () => {
              clickYes()
            }}
          >
            Yes
          </ButtonYes>
          <ButtonNo
            onClick={ () => {
              clickNo()
            }}
          >
            No
          </ButtonNo>
        </FlexBoxRow>
      </FlexBoxCol>
    </Card>
  );
}
