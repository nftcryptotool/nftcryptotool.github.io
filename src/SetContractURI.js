import React, { Component } from 'react'

class SetContractURI extends Component {

  state = {
    contractURI: ""
  };

  handleInput = e => {
    console.log("e: " + e);
    this.setState({ contractURI: e.target.value });
  };

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <form  onSubmit={(event) => {
                event.preventDefault()
                console.log("event: " + event);
                console.log("this.state.contractURI: " + this.state.contractURI);
              this.props.setContractURI(this.state.contractURI)
            }}>
              NFT Contract Address:
              <input className="text-input-class" type="text" value={this.state.contractURI} onChange={this.handleInput} />
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Lookup NFTs"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default SetContractURI;
