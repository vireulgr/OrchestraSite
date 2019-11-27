import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {copyYear: new Date().getFullYear()};
  }

  render() {
    return (
      <footer className='text-center bg-light'>
        <p>Симфонический оркестр Санкт-Перербурга. &copy; {this.state.copyYear}</p>
        <p>spb.symphony@gmail.com</p>
      </footer>
    );
  }
}

export default Footer;
