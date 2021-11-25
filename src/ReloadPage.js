import React, { Component } from 'react'

class ReloadPage extends Component {

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <form onSubmit={(event) => {
                event.preventDefault()
                window.location.reload();
            }}>
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Start Over"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default ReloadPage;
