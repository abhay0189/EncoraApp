export const Error = {
  EMAIL_NOT_REGISTERED:
    "Email id is not register with us. Please contact administrator.",
  GENERIC_ERROR: "Something went wrong. Please contact administrator",
} as const;

export const DisplayContactColumns: string[] = [
  "id",
  "name",
  "country",
  "phone",
  "action",
];
