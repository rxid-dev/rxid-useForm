import { FunctionComponent } from "react";

interface Props {
  label?: string;
  labelFor?: string;
  children: JSX.Element | Array<JSX.Element> | string;
  required?: boolean;
}

export const FormGroup: FunctionComponent<Props> = ({
  label,
  labelFor,
  children,
  required,
}) => {
  return (
    <div className="form-group mb-3">
      <label className={required ? "required" : ""} htmlFor={labelFor}>
        {label}
      </label>
      {children}
    </div>
  );
};
