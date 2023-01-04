/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="000000000-0"
        definitions={{
          '#': /^\d{10}-\d{1}$/,
        }}
        inputRef={ref as any}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default TextMaskCustom;

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}