import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // App.jsx에 1번만 import해도 똑같이 동작
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Toast() {
  const notify = () => {
    toast("Default Notification !");

    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_LEFT,
    // });

    // toast.warn("Warning Notification !", {
    //   position: toast.POSITION.BOTTOM_LEFT,
    // });

    // toast.info("Info Notification !", {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });

    // toast("Custom Style Notification with css class!", {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    //   className: "foo-bar",
    // });
  };

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
}

export default Toast;
