import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './ErrorModal.css';

const Backdrop = (props: any) => {
  return (
    <div className='error-modal__background' onClick={props.onConfirm}></div>
  );
};

const ModalOverplay = (props: any) => {
  return (
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
  );
};
const ErrorModal = (props: any) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('error-modal__background')!,
      )}
      {ReactDOM.createPortal(
        <ModalOverplay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('error-modal')!,
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
