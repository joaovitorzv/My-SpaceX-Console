export const formatDate = (date) => {
  let day = new Date(date).getDay().toString().padStart(2, '0');
  let month = new Date(date).getMonth().toString().padStart(2, '0');
  let year = new Date(date).getFullYear();

  let hour = new Date(date).getHours();
  let min = new Date(date).getMinutes();

  return `${day}/${month}/${year} at ${hour}:${min}`
}