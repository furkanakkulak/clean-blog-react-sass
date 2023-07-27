import { useState } from 'react';
const Input = ({ label, name, type, onChange, value }) => {
  const [focused, setFocused] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`input-container ${focused || value ? 'focused' : ''}`}>
      <label className={`input-label ${focused || value ? 'shrink' : ''}`}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          rows={4}
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
        />
      )}
    </div>
  );
};

export default Input;
