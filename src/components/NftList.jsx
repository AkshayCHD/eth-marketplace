import { useEffect, useState } from "react";
import { createClient } from "urql";

const APIURL = "https://api.thegraph.com/subgraphs/name/anubhavitis/easygames";

const transfersQuery = `
  query {
    newNfts(first: 20) {
      id
      name
      from
      to
    }
    transferNfts(first: 20) {
      id
      from
      to
      tokenId
      name
    }
  }
`;

const client = createClient({
  url: APIURL,
});

const imageArray = [
    "https://user-images.githubusercontent.com/26124625/205462519-6e6cc538-21d7-455c-9cd3-ee94d90b7397.png",
    "https://user-images.githubusercontent.com/26124625/205462521-77de0281-51eb-4e9b-b8c0-4544d16decbe.png",
    "https://user-images.githubusercontent.com/26124625/205462523-af66d0f8-d34f-4443-b99f-2116a549f8f5.png",
    "https://user-images.githubusercontent.com/26124625/205462525-3271450f-4f42-42c5-81e0-d2ad71a1515a.png",
    "https://user-images.githubusercontent.com/26124625/205462526-3a72e25c-56db-40e7-a9f8-96c6791f5478.png",
    "https://user-images.githubusercontent.com/26124625/205462530-b77471c1-8586-4ec5-8bb1-dfb6f238050f.png"
];

export default function NftList() {
  const [nftList, setNftList] = useState([]);
  const fetchNftList = async () => {
    const data = await client.query(transfersQuery).toPromise();
    const newNfts = data.data.newNfts;
    console.log(newNfts);
    setNftList([...newNfts]);
  };

  useEffect(() => {
    fetchNftList();
  }, []);

  return (
    <ul>
      {nftList.map((nft) => { return (
        <div key={nft.id} className="list">
            <img className="image" src={imageArray[Math.floor(Math.random() * imageArray.length)]} alt="Girl in a jacket" width="100" height="100"></img>
            <div>
                <li>from: {nft.from}</li>
                <li>name: {nft.name}</li>
                <li>to: {nft.to}</li>
            </div>
        </div>
      )})}
    </ul>
  );
}
