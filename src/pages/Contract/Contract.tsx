import React from 'react';
import { useLocation } from 'react-router';
import { ContractForm } from '../../components';

export interface ContractProps {
  className?: string;
}

interface LocationState {
  name: string;
  description: string;
  image: string;
}

export const Contract: React.FunctionComponent<ContractProps> = ({
  className,
}) => {
  const { state } = useLocation<LocationState>();
  console.log(state);

  // return <ContractForm name={state.name} image={state.image} description={state.description}/>;
  return (
    <ContractForm
      name={state.name}
      image={state.image}
      heroeDescription={state.description || 'Anonymous heroe description'}
    />
  );
};
