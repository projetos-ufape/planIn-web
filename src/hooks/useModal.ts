import { useContext } from "react";
import { ModalContext, ModalContextProps } from "../context/ModalProvider";

export function useModal() {
  return useContext<ModalContextProps>(ModalContext);
}