import logo from "./logo.svg";
import NftList from "./components/NftList";
import MintNft from "./components/MintNft";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Client Dashboard </h1>
      <hr />
      <h2>Mint Nft</h2>
      <MintNft />
      <hr />
      <h2>Nft List</h2>
      <NftList />
    </div>
  );
}

export default App;
