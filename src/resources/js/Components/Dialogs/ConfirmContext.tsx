import {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import ConfirmDialog from "./ConfirmDialog";
// import AnotherDialog from "./AnotherDialog"; // Nouveau type de modal
// import YetAnotherDialog from "./YetAnotherDialog"; // Autre nouveau type de modal

type ModalType = "confirm" | "another" | "yetAnother";

type Params = Partial<
  Omit<
    ComponentProps<typeof ConfirmDialog>,
    //   ComponentProps<typeof AnotherDialog> &
    //   ComponentProps<typeof YetAnotherDialog>,
    "open" | "onConfirm" | "onCancel"
  >
> & { type: ModalType };

const defaultFunction = (p: Params) => Promise.resolve(true);

const defaultValue = {
  confirmRef: {
    current: defaultFunction,
  },
};

const ConfirmContext = createContext(defaultValue);

function ModalWithContext() {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState<undefined | Params>();
  const resolveRef = useRef((v: boolean) => {});
  const { confirmRef } = useContext(ConfirmContext);

  confirmRef.current = (props: Params) =>
    new Promise((resolve) => {
      setProps(props);
      setOpen(true);
      resolveRef.current = resolve;
    });

  const closeModal = (result: boolean) => {
    resolveRef.current(result);
    setOpen(false);
  };

  const renderModal = () => {
    if (!props) return null;
    const commonProps = {
      onConfirm: () => closeModal(true),
      onCancel: () => closeModal(false),
      open: open,
      ...props,
    };
    switch (props.type) {
      case "confirm":
        return <ConfirmDialog {...commonProps} />;
      //   case "another":
      //       return <AnotherDialog {...commonProps} />;
      //   case "yetAnother":
      //       return <YetAnotherDialog {...commonProps} />;
      default:
        return null;
    }
  };

  return renderModal();
}

export function ConfirmContextProvider({ children }: PropsWithChildren) {
  const confirmRef = useRef(defaultFunction);
  return (
    <ConfirmContext.Provider value={{ confirmRef }}>
      {children}
      <ModalWithContext />
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const { confirmRef } = useContext(ConfirmContext);
  return {
    confirm: useCallback(
      (p: Params) => {
        return confirmRef.current(p);
      },
      [confirmRef]
    ),
  };
}
