import styles from './ModalWithForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function ModalWithForm({
  isModalOpen,
  setIsModalOpen,
  setTooltipOpen,
}) {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [task, setTask] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanyName('');
    setEmail('');
    setTask('');
    setName('');
    setIsModalOpen(false);
    setTooltipOpen(true);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${styles.modal} ${isModalOpen && styles.open}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.form__heading}>
          Delegate us your task! Fill in this form!{' '}
        </h2>
        <label className={styles.form__label} htmlFor='company'>
          Your company name*
        </label>
        <input
          onChange={handleCompanyNameChange}
          className={styles.form__input}
          type='text'
          placeholder='Company Name'
          value={companyName}
          name='company'
        />
        <label className={styles.form__label} htmlFor='email'>
          Your email*
        </label>
        <input
          onChange={handleEmailChange}
          className={styles.form__input}
          type='text'
          placeholder='email@email.com'
          value={email}
          name='email'
        />
        <label className={styles.form__label} htmlFor='task'>
          Describe your task
        </label>
        <textarea
          onChange={handleTaskChange}
          className={styles.form__textarea}
          type='text'
          placeholder='We want to...'
          value={task}
          name='task'
        />
        <label className={styles.form__label} htmlFor='name'>
          How can we call you?
        </label>
        <input
          onChange={handleNameChange}
          className={styles.form__input}
          type='text'
          placeholder='My name is'
          value={name}
          name='name'
        />
        <Button buttonText='Submit' buttonStyles={styles.button_type_submit} />
        <div className={styles.button_type_close} onClick={onClose}>
          <div className={styles.button__line_before}></div>
          <div className={styles.button__line_after}></div>
        </div>
      </form>
    </div>
  );
}
