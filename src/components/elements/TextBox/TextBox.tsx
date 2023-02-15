import { FC } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

export const TextBox: FC<InputProps> = (props) => {
  return <Input {...props} />;
};

export default TextBox;
