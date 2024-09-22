import toast from "react-hot-toast";

type ErrorProps = {
  errors: null | unknown;
  message: string;
  status: string;
}

export function handleError(data: unknown) {
  const { message } : ErrorProps = JSON.parse(JSON.stringify(data));
  toast.error(message || "Erro não mapeado")
}