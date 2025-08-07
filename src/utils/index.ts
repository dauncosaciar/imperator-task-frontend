/* Date utils */
export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const formatter = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Argentina/Buenos_Aires"
  });

  return formatter.format(date).replace(",", ", a las ");
};

/* DOM utils */
export const changeDocumentTitle = (title: string) => {
  document.title = `ImperatorTask | ${title}`;
};

export const getUserInitialsUppercase = (
  name: string,
  lastName: string
): string => {
  const nameInitial = name.charAt(0).toUpperCase();
  const lastNameInitial = lastName.charAt(0).toUpperCase();

  return nameInitial + lastNameInitial;
};
