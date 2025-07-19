import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PinInput, PinInputValueChangeDetails } from "@chakra-ui/react";
import { toast } from "sonner";
import { ConfirmToken } from "@/types";
import { validateToken } from "@/api/AuthApi";
import Spinner from "../ui/Spinner";

type NewPasswordTokenProps = {
  token: ConfirmToken["token"][];
  setToken: Dispatch<SetStateAction<string[]>>;
  setIsValidToken: Dispatch<SetStateAction<boolean>>;
};

export default function NewPasswordToken({
  token,
  setToken,
  setIsValidToken
}: NewPasswordTokenProps) {
  const { isPending, mutate } = useMutation({
    mutationFn: validateToken,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
      setIsValidToken(true);
    }
  });

  const handleChange = (e: PinInputValueChangeDetails) => {
    setToken(e.value);
  };

  const handleComplete = (e: PinInputValueChangeDetails) => {
    mutate({ token: e.valueAsString });
  };

  return (
    <div className="new-password-token">
      <form className="form">
        <div className="form__field">
          <label className="form__label">Código de 6 dígitos</label>

          <PinInput.Root
            size="2xl"
            value={token}
            onValueChange={handleChange}
            onValueComplete={handleComplete}
          >
            <PinInput.HiddenInput />
            <PinInput.Control className="form__control">
              <PinInput.Input index={0} className="form__input" />
              <PinInput.Input index={1} className="form__input" />
              <PinInput.Input index={2} className="form__input" />
              <PinInput.Input index={3} className="form__input" />
              <PinInput.Input index={4} className="form__input" />
              <PinInput.Input index={5} className="form__input" />
            </PinInput.Control>
          </PinInput.Root>
        </div>

        {isPending && <Spinner spinnerText="Validando token" />}
      </form>

      <div className="new-password-token__question">
        <p className="new-password-token__question-text">¿Venció tu token?</p>
        <Link
          to="/auth/forgot-password"
          className="new-password-token__question-link"
        >
          Solicita uno nuevo
        </Link>
      </div>
    </div>
  );
}
