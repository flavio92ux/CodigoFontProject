import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const productContext = React.createContext('');

export const ProductProvider = ({ children }) => {
  const [myId, setMyId] = useState([]);
  const [action, setAction] = useState(true);

  const allParameters = {
    myId,
    setMyId,
    action,
    setAction,
  };

  return (
    <productContext.Provider value={ allParameters }>
      { children }
    </productContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProducts = () => React.useContext(productContext);
