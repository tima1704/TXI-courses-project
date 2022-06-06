import { TOKEN } from "Constants/App";

export default function HttpHeadersAuthorization() {
  const tokenLocalStorage = localStorage.getItem(TOKEN);

  if (tokenLocalStorage) {
    return { Authorization: `Bearer ${tokenLocalStorage}` };
  }

  const tokenSessionStorage = sessionStorage.getItem(TOKEN);

  if (tokenSessionStorage) {
    return { Authorization: `Bearer ${tokenSessionStorage}` };
  }
}

export function getUrlImg(url: string) {
  if (url.includes("http")) {
    return url;
  } else {
    return process.env.REACT_APP_API_URL + url;
  }
}

export function Pay(options: any, onSuccess?: () => void) {
  var widget = new (window as any).cp.CloudPayments();
  widget.pay("charge", options, { onSuccess: onSuccess });
}
