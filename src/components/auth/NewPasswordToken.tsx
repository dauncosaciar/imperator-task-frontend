import { Link } from "react-router-dom";
import { PinInput, PinInputValueChangeDetails } from "@chakra-ui/react";

export default function NewPasswordToken() {
  const handleChange = (e: PinInputValueChangeDetails) => {
    console.log(e.value);
  };

  const handleComplete = (e: PinInputValueChangeDetails) => {
    console.log(e.valueAsString);
  };

  return (
    <div className="new-password-token">
      <form className="form">
        <div className="form__field">
          <label className="form__label">Código de 6 dígitos</label>

          <PinInput.Root
            size="2xl"
            value={["1", "2", "3", "4", "5", "6"]}
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

        {/* {isPending && <Spinner />} */}
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
