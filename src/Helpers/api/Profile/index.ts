import axios, { AxiosError } from "axios";
import { API_AUTH, API_LOGIN } from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { setModalViewAction } from "Redux/ModalReducer/actions";
import { AppStore } from "index";
import { IValidError } from "Types/common";
import { ILogin, ILoginRes, IUserRes } from "Types/login";
import { ISuccessRes, IValidErrorRes } from "Types/responce";

export const ProfileService = {
  async getProfileInfo() {
    return axios
      .get<ISuccessRes<IUserRes>>(API_AUTH, {
        headers: HttpHeadersAuthorization(),
      })
      .then((res) => res.data.data)
      .catch((e) => {
        throw e;
      });
  },
  async login(data: ILogin) {
    return axios
      .post<ISuccessRes<ILoginRes>>(API_LOGIN, data)
      .then((res) => res.data.data)
      .catch((e: AxiosError<IValidErrorRes>) => {
        throw e.response?.data.errors;
      });
  },
  async registration(data: any, email: string) {
    return axios
      .post("https://katiatxi.club/txi/register", data)
      .then(() => {
        ProfileService.sendEmailAfterRegistration(email);
      })
      .catch((e: AxiosError) => {
        if (e.response?.data && Array.isArray(e.response?.data)) {
          const errors: string[] = e.response.data;

          throw errors.map<IValidError>((item) => {
            let message = "";

            let name = item;

            if (item === "name") {
              message = "errors.registrations.name";
            }

            if (item === "surname") {
              name = "name";
              message = "errors.registrations.surname";
            }

            if (item === "email") {
              message = "errors.registrations.email";
            }

            if (item === "password") {
              message = "errors.registrations.password";
            }

            return { name, message };
          });
        } else {
          throw e;
        }
      });
  },
  async sendEmailAfterRegistration(email: string) {
    return axios
      .post(
        "https://katiatxi.club/confirm-email-send",
        { email },
        {
          params: { courses: true },
        }
      )
      .then(() => {
        AppStore?.dispatch(setModalViewAction("sentMail"));
      })
      .catch((e) => {
        AppStore?.dispatch(setModalViewAction("someWrong"));
        throw e;
      });
  },
  async confirmEmail(confirmId: string) {
    return axios
      .post("https://katiatxi.club/confirm-email", { confirmId })
      .then((res) => {
        AppStore?.dispatch(setModalViewAction("login"));
      })
      .catch((e) => {
        AppStore?.dispatch(setModalViewAction("someWrong"));
      });
  },
};
