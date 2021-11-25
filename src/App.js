import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { NEIGHBORHOOD_ABI, NEIGHBORHOOD_ADDRESS } from './config'
import { ERC721_ABI } from './erc721-config'
import SetContractURI from './SetContractURI'
import ContractImage from './ContractImage'
import ReloadPage from './ReloadPage'

//Some good notes here: https://github.com/rene78/erc-721
// TODO: 2. only call contract 1 time to get the tokenURI, then manipulate the URI string in code
// TODO: 3. Completely reload page if a new contractURI is provided? Or a clear button? something like that.
// TODO: 4. Fetch API cannot load ipfs://QmYsh3btpkfU6Scks8N92BmjS8P9tqStPbpGFV2SkBxoLD/9. URL scheme "ipfs" is not supported.
class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    this.state.expectedNetwork = true;
    const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/6fec673daf8c4b189cca94c1ac57635a")
//    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
//    const web3 = new Web3(Web3.givenProvider || "https://ropsten.infura.io/v3/1eb1d5d85a214024b363b8e07138f02e")
//    const web3 = new Web3(Web3.givenProvider || "https://rpc.testnet.fantom.network/")
//    const web3 = new Web3(Web3.givenProvider || "https://rpc.ftm.tools/")
    this.setState({ loading: false })
  }

  async imageContract(uri) {
    const web3 = new Web3(Web3.givenProvider || "https://rpc.ftm.tools/")

    const contractURI = uri
    console.log("contractURI: " + contractURI);
    if (contractURI != "") {
        var contract = new web3.eth.Contract( ERC721_ABI, "0x12094ae07817a2630F9F12fbaa4FB81D93ADBA2C" );
        try {
            contract = new web3.eth.Contract( ERC721_ABI, contractURI )
        } catch (err) {
            console.log(err);
        }
        var continueLoop = true;
        var counter = 1;
        var tokenURIloop = await contract.methods.tokenURI(counter).call().then((result) => {
               console.log("result: " + result);
               console.log("result.length: " + result.size);
               return result;
           }).catch((err) => {
               continueLoop = false;
           });

        var tokenURITrimmed = tokenURIloop.substr(0, tokenURIloop.lastIndexOf("/"));
        console.log("tokenURITrimmed: " + tokenURITrimmed)
        console.log(tokenURIloop.size);
        if (tokenURIloop.length - tokenURITrimmed.length > 10) {
            tokenURITrimmed = tokenURIloop;
        }
        console.log("tokenURITrimmed: " + tokenURITrimmed)
        if (tokenURITrimmed.includes("ipfs://")) {
            tokenURITrimmed = tokenURITrimmed.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
        }
        console.log("tokenURITrimmed: " + tokenURITrimmed)

        while (continueLoop) {
            var tokenString = tokenURITrimmed + "/" + counter;
            console.log("tokenString " + tokenString);

            await fetch(tokenString).then(res => {
              if (!res.ok) {
                  console.log("failed to fetch")
                  continueLoop = false;
              } else {
                  console.log(res.json())
              }
            })


            try {
                 this.getJsonLoop(counter, tokenString);
            } catch (err) {
                 console.log(err);
            }

            await this.wait(400);
            counter++;
        }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      taskCount: 0,
      tasks: [],
      loading: true,
      expectedNetwork: false,
      image: '',
      images: [],
      contractURI: ''
    }

    this.getJsonLoop = this.getJsonLoop.bind(this)
    this.setContractURI = this.setContractURI.bind(this)
  }

    wait(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

  getJsonLoop(id, url) {
      var GSON = require('gson');

    try {
      fetch(url)
      .then(res => {
        if (!res.ok) {
            console.log("failed to fetch")
        } else {
            return res.json()
        }
      })
      .then(out => {
        var thing = {
            id: 0,
            image: ""
        }
        thing.id = id;
        var image = GSON.decode(GSON.encode(out)).image
        if (image.includes("ipfs://")) {
            image = image.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
        }
        thing.image = image
        this.state.images.push(thing)
        this.setState({ images: this.state.images })
      }).catch(err => {
        console.log(err);
      })
    } catch (err) {
        console.log(err);
    }
  }

  contractImage() {
    console.log(this.state.image)
  }

  setContractURI(uri) {
    console.log("setting uri: " + uri);
    this.setState({ images: [] })
    this.setState({ contractURI: uri })

    try {
        this.imageContract(uri);
    } catch (err) {
        console.log(err);
    }

  }

  render() {
    return (
      <div className="all">
        {!this.state.expectedNetwork ? 
          <div className="header-text">Connect to Fantom mainnet before minting</div> 
          :
          <div></div>
        }
        <br></br>
          <h1 className="header-text">NFT Viewer</h1>
          <div className="container-fluid">
            <div className="row">
              <main role="main" className="col-lg-6 d-flex justify-content-left">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <SetContractURI
                    setContractURI={this.setContractURI}
                    contractURI={this.state.contractURI}
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
              <main role="main" className="col-lg-6 d-flex justify-content-right">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <ReloadPage
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
            {this.state.images.map(record => {
              return <img key={record.id} src = {record.image} alt = "" height = "33.333%" width = "33.333%"/>
            })}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
    );
  }
}

export default App;
