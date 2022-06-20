import axios, { AxiosError } from "axios";
import {
  API_AUTH,
  API_CONFIRM_EMAIL,
  API_CONFIRM_EMAIL_SEND,
  API_LOGIN,
  API_REGISTRATION,
  API_RESET_PASSWORD,
  API_RESET_PASSWORD_SEND,
  API_SEND_EMAIL_REG,
} from "Constants/API";
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
      .post<ISuccessRes<ILoginRes | "sendEmail">>(API_LOGIN, data)
      .then((res) => res.data.data)
      .catch((e: AxiosError<IValidErrorRes>) => {
        throw e.response?.data.errors;
      });
  },
  async registration(data: any, email: string, name: string) {
    return axios
      .post(API_REGISTRATION, data)
      .then(async () => {
        await ProfileService.sendEmailAfterRegistration(email, name);
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
        }
        if (e.response?.status === 413) {
          const errors: IValidError[] = [
            { name: "file", message: "errors.registrations.file" },
          ];
          throw errors;
        }
        throw e;
      });
  },
  async sendEmailAfterRegistration(email: string, name: string) {
    return await Promise.all([
      await axios
        .post(
          API_CONFIRM_EMAIL_SEND,
          { email },
          {
            params: { courses: true },
          }
        )
        .then(() => {
          AppStore?.dispatch(setModalViewAction("sentEmailMessege"));
        })
        .catch((e) => {
          AppStore?.dispatch(setModalViewAction("emailErrorMessage"));
          throw e;
        }),
      await axios.post(API_SEND_EMAIL_REG, { email, name }),
    ]);
  },
  async confirmEmail(confirmId: string) {
    return axios
      .post(API_CONFIRM_EMAIL, { confirmId })
      .then((res) => {
        AppStore?.dispatch(setModalViewAction("login"));
      })
      .catch((e) => {
        AppStore?.dispatch(setModalViewAction("emailErrorMessage"));
      });
  },
  async sendEmailResetPassword(email: string) {
    return axios
      .post(
        API_RESET_PASSWORD_SEND,
        { email },
        {
          params: { courses: true },
        }
      )
      .then(() => {
        return true;
      })
      .catch((e: AxiosError) => {
        if (e.response?.data.input) {
          // eslint-disable-next-line no-throw-literal
          throw [
            { name: e.response?.data.input, message: "errors.login.email" },
          ];
        }
        throw e;
      });
  },
  async resetPassword(data: any) {
    return axios
      .post(API_RESET_PASSWORD, data)
      .then(() => {
        return true;
      })
      .catch((e: AxiosError) => {
        if (e.response?.data.input) {
          // eslint-disable-next-line no-throw-literal
          throw [
            { name: e.response?.data.input, message: e.response?.data.message },
          ];
        }
        throw e;
      });
  },
};
