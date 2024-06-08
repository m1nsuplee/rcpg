import {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

enum DisclosureStates {
  Open,
  Closed,
}

enum DisclosureActionTypes {
  ToggleDisclosure,
  CloseDisclosure,
}

type DisclosureActions =
  | { type: DisclosureActionTypes.ToggleDisclosure }
  | { type: DisclosureActionTypes.CloseDisclosure };

function disclosureReducer(
  state: DisclosureStates,
  action: DisclosureActions,
): DisclosureStates {
  switch (action.type) {
    case DisclosureActionTypes.ToggleDisclosure:
      return state === DisclosureStates.Open
        ? DisclosureStates.Closed
        : DisclosureStates.Open;
    case DisclosureActionTypes.CloseDisclosure:
      return DisclosureStates.Closed;
  }
}

function useDisclosureReducer() {
  return useReducer(disclosureReducer, DisclosureStates.Closed);
}

const DisclosureActionsContext = createContext<{
  toggleDisclosure: () => void;
  closeDisclosure: () => void;
} | null>(null);
DisclosureActionsContext.displayName = 'DisclosureActionsContext';

function useDisclosureActions(component: string) {
  const context = useContext(DisclosureActionsContext);

  if (context === null) {
    throw new Error(
      `<${component}> must be used within a <Disclosure> component`,
    );
  }

  return context;
}

const DisclosureDataContext = createContext<{
  state: DisclosureStates;
}>({
  state: DisclosureStates.Closed,
});
DisclosureDataContext.displayName = 'DisclosureDataContext';

function useDisclosureData(component: string) {
  const context = useContext(DisclosureDataContext);

  if (context === undefined) {
    throw new Error(
      `<${component}> must be used within a <Disclosure> component`,
    );
  }

  return context;
}

export function Disclosure({
  children,
}: {
  children:
    | ReactNode
    | {
        ({ isOpen }: { isOpen: boolean }): JSX.Element;
      };
}) {
  const [state, dispatch] = useDisclosureReducer();

  return (
    <DisclosureActionsContext.Provider
      value={{
        toggleDisclosure: () =>
          dispatch({ type: DisclosureActionTypes.ToggleDisclosure }),
        closeDisclosure: () =>
          dispatch({ type: DisclosureActionTypes.CloseDisclosure }),
      }}
    >
      <DisclosureDataContext.Provider
        value={{
          state,
        }}
      >
        {typeof children === 'function'
          ? children({ isOpen: state === DisclosureStates.Open })
          : children}
      </DisclosureDataContext.Provider>
    </DisclosureActionsContext.Provider>
  );
}

Disclosure.Button = function DisclosureButton(
  props: ComponentPropsWithoutRef<'button'>,
) {
  const { state } = useDisclosureData('DisclosureButton');
  const { toggleDisclosure } = useDisclosureActions('Disclosure.Button');

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    toggleDisclosure();

    props.onClick?.(event);
  };

  return (
    <button
      aria-expanded={state === DisclosureStates.Open}
      onClick={handleClick}
      {...props}
    />
  );
};

Disclosure.Panel = function DisclosurePanel(
  props: ComponentPropsWithoutRef<'div'>,
) {
  const { state } = useDisclosureData('Disclosure.Panel');

  return (
    <div
      hidden={state === DisclosureStates.Closed}
      {...props}
    />
  );
};
