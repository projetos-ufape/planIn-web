import { useCallback, useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import type { NotificationProps } from "../types/NotificationProps";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { useAuth } from "../hooks/useAuth";

export interface NotificationContextProps {
  isLoadingCategory: boolean;
  notifications: NotificationProps[];
  getNotifications: () => Promise<void>;
}

export const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);

  const getNotifications = useCallback(async () => {
    setIsLoadingCategory(true);

    await api
      .get("notifications")
      .then((response) => {
        let { data } = response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data = data.map((v: any) => ({
          title: v.title,
          dateTimeStart: new Date(v.start_date),
          dateTimeEnd: new Date(v.end_date),
          unread: v.viewed ? "read" : "unread",
        }))
        console.log(data);
        setNotifications(data);
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        setIsLoadingCategory(false);
      });
  }, []);

  const updateNotifications = useCallback(async (): Promise<void> => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      getNotifications();
      await new Promise((resolve) => setTimeout(resolve, 30 * 1000));
    }
  }, [getNotifications]);

  useEffect(() => {
    if (user?.id) {
      updateNotifications();
    }
  }, [updateNotifications, user]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        isLoadingCategory,
        getNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
