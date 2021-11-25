import React, { Component } from 'react'

class ContractImage extends Component {

  state = {
    image: ""
  };

  handleInput = e => {
    this.setState({ image: e.target.value });
  };

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>ContractImage</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.contractImage()
            }}>
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="ContractImage"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default ContractImage;
