import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PinInput, PinInputValueChangeDetails } from "@chakra-ui/react";
import { changeDocumentTitle } from "@/utils";

export default function ConfirmAccountView() {
  const [token, setToken] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    changeDocumentTitle("Confirma tu cuenta");
  }, []);

  const handleChange = (e: PinInputValueChangeDetails) => {
    setToken(e.value);
  };

  const handleComplete = (e: PinInputValueChangeDetails) => {
    console.log(e.valueAsString);
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
