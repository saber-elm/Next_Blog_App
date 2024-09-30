import Button from "./Button";
import { useFormStatus } from "react-dom";
import SvgLoaderComponent from "./SvgLoaderComponent";
import { SpinnerMini } from "./Spinner";

function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();


  return (
    <Button
      {...rest}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4
    ${className}
    `}
    >
      {children}
      {pending && <SpinnerMini />}
      {/* {pending && <SvgLoaderComponent />} */}
    </Button>
  );
}
export default SubmitButton;
