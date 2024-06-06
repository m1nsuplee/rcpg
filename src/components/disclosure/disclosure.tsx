import { useReducer } from 'react';

enum DisclosureStates {
  Open,
  Closed,
}

interface DisclosureStateDefinition {
  state: DisclosureStates;
}

enum DisclosureActionTypes {
  Toggle,
  Close,
}

type DisclosureActions = {
  type: DisclosureActionTypes;
};

function disclosureReducer(
  state: DisclosureStateDefinition,
  action: DisclosureActions,
) {
  switch (action.type) {
    case DisclosureActionTypes.Toggle:
      return {
        ...state,
        state:
          state.state === DisclosureStates.Open
            ? DisclosureStates.Closed
            : DisclosureStates.Open,
      };
    case DisclosureActionTypes.Close:
      return {
        ...state,
        state: DisclosureStates.Closed,
      };
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
}

function useDisclosureReducer() {
  return useReducer(disclosureReducer, {
    state: DisclosureStates.Closed,
  });
}

function useDisclosure() {
  const [{ state }, dispatch] = useDisclosureReducer();

  const toggle = () => {
    dispatch({
      type: DisclosureActionTypes.Toggle,
    });
  };
  const close = () => {
    dispatch({
      type: DisclosureActionTypes.Close,
    });
  };

  return {
    isOpen: state === DisclosureStates.Open,
    toggle,
    close,
  };
}

interface DisclosureProps {
  children: (props: {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
  }) => JSX.Element;
}

export function Disclosure({ children }: DisclosureProps) {
  const disclosure = useDisclosure();

  return children(disclosure);
}
