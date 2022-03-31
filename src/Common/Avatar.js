import React from 'react';
import {Image} from 'react-native';
import {Colors, Metrics} from '../theme';

const Avatar = ({source, size, ...rest}) => (
  <Image
    {...rest}
    style={{
      height: size,
      width: size,
      borderRadius: size / 2,
      borderColor: Colors.white,
      borderWidth: Metrics.ratio(2),
      alignSelf:"center"
    }}
    {...{source}}
  />
);
export default React.memo(Avatar);