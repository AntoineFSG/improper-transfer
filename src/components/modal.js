import React from "react";
import modalStyles from "../css/modal.module.scss";

export default class Modal extends React.Component {
    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <div className={modalStyles.modal}>
          <div className={modalStyles.modalImage}>{this.props.children}</div>
            <button className={modalStyles.toggleButton} onClick={this.onClose}>
              X
            </button>
        </div>
      );
    }
  }
