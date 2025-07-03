import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PinInput, PinInputValueChangeDetails } from "@chakra-ui/react";
import { toast } from "sonner";
import { changeDocumentTitle } from "@/utils";
import { confirmAccount } from "@/api/AuthApi";
import Spinner from "@/components/ui/Spinner";

export default function ConfirmAccountView() {
  const [token, setToken] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: confirmAccount,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
      navigate("/auth/login");
    }
  });

  useEffect(() => {
    changeDocumentTitle("Confirma tu cuenta");
  }, []);

  const handleChange = (e: PinInputValueChangeDetails) => {
    setToken(e.value);
  };

  const handleComplete = (e: PinInputValueChangeDetails) => {
    mutate({ token: e.valueAsString });
  };

  return (
    <div className="confirm-account-view">
      <h2 className="confirm-account-view__heading">Confirma tu cuenta</h2>
      <p className="confirm-account-view__text">
        Ingresando el código o token que recibiste por email para que puedas
        comenzar a utilizarla.
      </p>

      <div className="confirm-account-view__content">
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

          {isPending && <Spinner spinnerText="Confirmando cuenta" />}
        </form>

        <div className="confirm-account-view__question">
          <p className="confirm-account-view__question-text">
            ¿Venció tu token de confirmación?
          </p>
          <Link to="#" className="confirm-account-view__question-link">
            Solicita uno nuevo
          </Link>
        </div>
      </div>
    </div>
  );
}
