import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../form/ErrorMessage";

export default function NoteForm({ register, errors, mutationExecuting }) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="content" className="form__label">
          Nueva nota
        </label>
        <textarea
          id="content"
          className={`form__input${
            errors.content ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="text"
          placeholder="Lo que desees dejar registrado"
          disabled={mutationExecuting}
          {...register("content", {
            required: "El Contenido de la Nota es obligatorio."
          })}
        />
        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
