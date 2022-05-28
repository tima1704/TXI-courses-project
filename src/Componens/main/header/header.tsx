import { FC } from "react";
import styles from "./index.module.css";
import React from "react";
import Modal from '../../pop-ups/sign';
import classNames from "classnames";
import { Slant as Hamburger } from 'hamburger-react';
import Logo from "Svg/logo.svg";
import { Icon } from "Componens/common/Icon";
import { Link, useNavigate } from "react-router-dom";
import { URL_HOME, URL_LOGIN, URL_REGISTER, URL_USER_COURSE } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { Button } from "Componens/common/Button";
import { useDispatch } from "react-redux";

interface IHeader {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IHeader> = ({ setOpenMenu }) => {
  const navigate = useNavigate();

  const [isToggle , setIsToggle] = React.useState(false)

  const [arrowRotate, setArrorRotate] = React.useState(false)

  const toggleNav = () => setIsToggle(!isToggle)

  const toggleArrow = () => setArrorRotate(!arrowRotate)

  const onClickLogo = () => navigate(URL_HOME, { replace: true });

  const { isAuth, user } = useAppSelector((state) => state.App);

  
  const { isVisible } = useAppSelector((state) => state.Modal);

  const { setModalViewAction , setModalVisibleAction } = useAppDispatch()
  
  const onClickOpenMenu = () =>  setOpenMenu((p) => !p);
  const [isOpen, setOpen] = React.useState(false)

  const setModal = (view: boolean) => {
    setModalVisibleAction()
    setModalViewAction(view)
  }

  return (
    <header
      className={classNames(styles["header"], "container", "anim_opacity")}
    >
      <div className={styles["logo_menu"]}>
          <div className={styles['ImgLogoMenu']}>
            <Link to={URL_HOME}><img src={Logo} alt="Logo" className="scale" /></Link>
          </div>
        <div className={styles["menu__nav"]}>
          <ul className={isToggle ? styles["activeNav"] : ''}>
            <li
              className={classNames(
                styles["menu__nav_item"],
                styles["menu__nav_item_active"]
              )}
            >
              Катя <span className={styles["ch"]}>Чи</span>
            </li>
            <li
              className={styles["menu__nav_item"]}>About Txi</li>
            <li 
              className={styles["menu__nav_item"]}>Shopping</li>
            <li 
              className={styles["menu__nav_item"]}>Blog</li>
          </ul> 
          <span 
            onClick={() => {
              toggleNav()
              toggleArrow()
            }}
            className={ styles["ArrowLeftSpan"] }>
              <Icon 
                icon="arrowLeft" 
                className={arrowRotate ? classNames(styles.arrowLeft , styles.activeArrow) : styles.arrowLeft} 
              />
          </span>
        </div>
      </div>
      {isVisible && <Modal closeModal={setModalVisibleAction}/>}
      {isAuth ? (
        <div className={styles["rightSight__Header"]}>
          <div className={styles["menu"]} onClick={onClickOpenMenu}>
            <span><Hamburger/></span>
          </div>
          <Link to={URL_USER_COURSE}>
            <div className={styles["profile_img"]}>
              {user?.pic ? (
                <img src={process.env.REACT_APP_TXI_URL + user.pic} alt="" />
              ) : (
                user?.name[0]
              )}
            </div>
          </Link>
          <div className={styles["langsComponentUs"]}>
            <button>Rus</button>
          </div>
        </div>
      ) : (
        <div className={styles["rightSight__Header"]}>
          <div className={styles["menu"]} onClick={onClickOpenMenu}>
          <span><Hamburger toggled={isOpen} toggle={setOpen}/></span>
          </div>
          <Button className={styles["registerButton"]}>
            <span onClick={() => setModal(true)}>{`Sign in`}</span>
            {"or"}
            <span onClick={() => setModal(false)}>{`Register`}</span>
            <Icon icon="enter" />
          </Button>
          <div className={styles["langsComponent"]}>
            <button>Rus</button>
          </div>
        </div>
      )}
    </header>
  );
}