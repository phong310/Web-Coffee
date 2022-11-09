import {
  FaCheckCircle,
  FaExclamationCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import "../CSS/Alert.css";

/*
- visible: boolean
- type: "success" || "warning" || "confirm"
- content: string
- confirmText: string
- cancelText: string
- onConfirm: () => {}
- onCancel: () => {}
*/

const Alert = (props) => {
  return (
    <div className={`alert_container ${props.visible ? "visible" : "hidden"}`}>
      <div className="alert_body">
        <div className="alert_icon">
          {props.type === "success" ? (
            <FaCheckCircle size={25} color="green" />
          ) : null}
          {props.type === "warning" ? (
            <FaExclamationCircle size={25} color="orange" />
          ) : null}
          {props.type === "confirm" ? (
            <FaQuestionCircle size={25} color="cyan" />
          ) : null}
        </div>
        <div className="alert_content">{props.content}</div>
        <div className="alert_footer">
          <div className="alert_confirm" onClick={props.onConfirm}>
            {props.confirmText}
          </div>
          <div className="alert_cancel" onClick={props.onCancel}>
            {props.cancelText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
