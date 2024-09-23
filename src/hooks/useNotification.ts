import { useContext } from "react";
import { NotificationContext, NotificationContextProps } from "../context/NotificationProvider";

export function useNotification() {
  return useContext<NotificationContextProps>(NotificationContext);
}