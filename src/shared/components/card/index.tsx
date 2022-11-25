import { FunctionComponent } from "react";

interface Props {
  header?: string;
  children?: JSX.Element | string | Array<JSX.Element>;
}

export const Card: FunctionComponent<Props> = ({ header, children }) => {
  return (
    <div className="card">
      {header && (
        <div className="card-header">
          <h3>{header}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};
