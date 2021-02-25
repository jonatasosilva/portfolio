import { DefaultToast } from "react-toast-notifications";

export const MyCustomToast = ({ children, ...props }) => (
  <DefaultToast {...props}>
    <div>{children}</div>
  </DefaultToast>
);
