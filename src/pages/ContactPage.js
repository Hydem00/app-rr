import React from 'react';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {

  state = {
    value: "",
    isEmpty: true,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true
    })
  }

  handleChange = (e) => {
    if(e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false
      })
    }
    this.setState({
      value: e.target.value,
    })
  }

  handleFormIsEmpty = () => {
    if(!this.state.value) {
      alert("Masz niewypełniony formularz.");
    }
  }

  render() {
    return ( 
      <div className='contact'>
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
          <button onClick={this.handleFormIsEmpty}>Wyślij</button>
        </form>
      </div>
     );
  }
}
 
export default ContactPage;