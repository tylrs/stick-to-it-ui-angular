import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.get("password")?.value ===
    control.get("passwordConfirmation")?.value
    ? null
    : { passwordsMatch: true };
};
