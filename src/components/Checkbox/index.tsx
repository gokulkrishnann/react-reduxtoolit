import React, { useEffect, useState } from 'react';

import { Checkmark, CheckmarkInput, CheckboxContainer, Label } from './styles';

interface Iprops {
  id: string;
  name: string;
  onClick?: (checked: boolean) => void;
  isChecked?: boolean;
  label?: string | null;
  /**
   *Error theme
   */
  error?: boolean;
  /**
   * Warning theme
   */
  warning?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

const Checkbox: React.FC<Iprops> = ({
  error = false,
  id,
  isChecked = false,
  label = null,
  name,
  onClick,
  warning = false,
  disabled = false,
  ariaLabel = 'Checkbox'
}) => {
  const [checked, setCheckmark] = useState(isChecked);

  useEffect(() => setCheckmark(isChecked), [isChecked]);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!disabled) {
      onClick ? onClick(checked) : setCheckmark((checked) => !checked);
    }
  };

  return (
    <CheckboxContainer onClick={handleCheck} aria-label={ariaLabel}>
      <Label htmlFor={`check_${id}`}>
        <CheckmarkInput
          checked={checked}
          name={name}
          id={`check_${id}`}
          readOnly
          disabled={disabled}
        />
        <Checkmark disabled={disabled} $warning={warning} $error={error} />
        {label}
      </Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
