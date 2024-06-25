//Peux-tu expliquer comment tu gérerais les appels API dans une application React ? 
// Comment gérerais-tu les erreurs et les états de chargement ?

// url de l'api fictive : https://api.example.com/data
// message d'erreur de l'api : Network response was not ok.

import React, { // ******, // ******* } from 'react';

interface Data {
  // définir la structure des données ici
}

const DataFetchingComponent: React.FC = () => {

// **********

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;