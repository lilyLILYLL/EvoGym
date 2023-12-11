import * as Yup from "yup";
export type ContactFormModel = {
  name: string;
  email: string;
  message: string;
};
export const ValidateContactForm = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid!").required("Email is required"),
  message: Yup.string(),
});
