import React from 'react';
import Menu from '../Menu';

const styles = {
  background: '#1F2532',
  width: '100%',
  height: '15vh',
};

export default function Header(props) {
  return (
    <div style={styles}>
      <Menu {...props} />
    </div>
  );
}
