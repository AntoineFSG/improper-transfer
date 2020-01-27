import React from "react";
import modalStyles from "../css/modal.module.scss";

export default class Modal extends React.Component {
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <div className={modalStyles.modal}>
        <button onClick={this.props.handleClick} className={modalStyles.toggleButton}>
              X
        </button>
          <div className={modalStyles.modalImage}>{this.props.children}</div>
        </div>
      );
    }
  }
