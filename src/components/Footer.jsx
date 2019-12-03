import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { copyYear: new Date().getFullYear() };
  }

  render() {
    const { copyYear } = this.state;
    return (
      <footer className="text-center bg-light">
        <p>
          The Company Name Goes Here. &copy;
          {copyYear}
        </p>
        <p>mail.box@domain.com</p>
      </footer>
    );
  }
}

export default Footer;
