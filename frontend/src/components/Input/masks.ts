
export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/[0-9]+. [0-9]\d{2}$/g, ".");
  

  e.currentTarget.value = value;
  return e;
}


