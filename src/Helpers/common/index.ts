import { TOKEN } from "Constants/App";
import { AppStore } from "index";
import { setModalViewAction } from "Redux/ModalReducer/actions";

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
  try {
    const cp = (window as any).cp;
    if (!cp) {
      return AppStore.dispatch(setModalViewAction("cloudErrors"));
    }
    var widget = new cp.CloudPayments();
    widget.pay("charge", options, {
      onSuccess: onSuccess,
    });
  } catch (e) {
    throw e;
  }
}
