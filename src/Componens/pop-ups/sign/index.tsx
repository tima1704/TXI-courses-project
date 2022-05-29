import React from 'react';
import LoginPage from 'Pages';

import styles from "./index.module.css";
import { useAppSelector } from 'Hooks/redux';
import { RegisterPage } from 'Pages/Register';

interface Props {
     closeModal: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = ({ closeModal }: Props) => {    
     const { isLoggedIn } = useAppSelector((state) => state.Modal);
     
     return (
          <>
               <div className={styles["modalBackGround"]} onClick={() => closeModal(false)}>
                    <div className={styles["modalContainer"]} onClick={e => e.stopPropagation()}>
                         <div className={styles["BlockClose"]}>
                              <button className={styles["modalClose"]} onClick={() => closeModal(false)}>Х</button>
                         </div>
                         {isLoggedIn ? <LoginPage/> : <RegisterPage/>}
                    </div>
               </div>
          </>
     );
};

export default Modal;