import React, { Fragment } from 'react';
import Button from './Button';
import './ErrorModal.css';

const ErrorModal = (props: any) => {
  return (
    <Fragment>
      <div className='error-modal__background' onClick={props.onConfirm}></div>
      <div className='error-modal'>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button type='button' onClick={props.onConfirm}>
            Закрыть окно
          </Button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
