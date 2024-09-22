import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Modal } from "../components/Modal";

export interface ModalContextProps {
  mode: "task" | "goal";
  setMode: (mode: "task" | "goal") => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
  startTime: Dayjs | null;
  setStartTime: (time: Dayjs | null) => void;
  endTime: Dayjs | null;
  setEndTime: (time: Dayjs | null) => void;
  notification: "sim" | "nao";
  setNotification: (value: "sim" | "nao") => void;
  notificationTime: number;
  setNotificationTime: (time: number) => void;
  goalWithoutDate: boolean;
  setGoalWithoutDate: (value: boolean) => void;
  isLoading: boolean;
  open: boolean;
  handleOpen: (mode?: "task" | "goal") => void;
  handleClose: () => void;
  notificationTimeType: "minute" | "hour";
  setNotificationTimeType: (value: "minute" | "hour") => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"task" | "goal">("task");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs().add(1, "hour"));
  const [notification, setNotification] = useState<"sim" | "nao">("sim");
  const [notificationTimeType, setNotificationTimeType] = useState<"minute" | "hour">("minute");
  const [notificationTime, setNotificationTime] = useState<number>(30);
  const [goalWithoutDate, setGoalWithoutDate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);


  function handleOpen(mode: "task" | "goal" = "task") {
    setMode(mode);
    setOpen(true);
  }

  function handleClose() {
    setMode("task");
    setTitle("");
    setDescription("");
    setSelectedDate(dayjs());
    setStartTime(dayjs());
    setEndTime(dayjs().add(1, "hour"));
    setNotification("sim");
    setNotificationTime(30);
    setGoalWithoutDate(false);
    setIsLoading(false);
    setOpen(false);
  }

  useEffect(() => {
    if (mode === "task") {
      setGoalWithoutDate(false);
    }
  }, [mode]);

  return (
    <ModalContext.Provider
      value={{
        mode,
        setMode,
        title,
        setTitle,
        description,
        setDescription,
        selectedDate,
        setSelectedDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        notification,
        setNotification,
        notificationTime,
        setNotificationTime,
        goalWithoutDate,
        setGoalWithoutDate,
        isLoading,
        open,
        handleOpen,
        handleClose,
        notificationTimeType,
        setNotificationTimeType
      }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};
