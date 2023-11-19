import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameIdInput = nanoid();
  numberIdInput = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameIdInput}>
          Name
          <input
            className={css.input_form}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelChange}
            required
          />
        </label>
        <label className={css.label} htmlFor={this.numberIdInput}>
          Number
          <input
            className={css.input_form}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handelChange}
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
