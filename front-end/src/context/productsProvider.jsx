import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const productContext = React.createContext('');

export const ProductProvider = ({ children }) => {
  const [myId, setMyId] = useState();

  const allParameters = {
    myId,
    setMyId,
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
