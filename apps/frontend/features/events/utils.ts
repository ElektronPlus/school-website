export const getDate = (date: string, type: "previous" | "next") => {
  const day = new Date(date);

  return new Date(
    new Date(date).setDate(type === "previous" ? day.getDate() - 1 : day.getDate() + 1),
  )
    .toISOString()
    .split("T")[0];
};