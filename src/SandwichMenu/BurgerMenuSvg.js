import React, {useEffect, useRef, useState} from "react";
import styles from "./BurgerMenuSvg.module.css";

const BurgerMenu = () => {

    const node = useRef();

    const [isMenuOpen, toggleMenu] = useState(false);

    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
            };
        }, [ref, handler]);
    };

    function toggleMenuMode(event) {
       if(event) event.preventDefault()
        toggleMenu(!isMenuOpen)
    }

    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });
    return (
        <header ref={node}>
            <div
                className={isMenuOpen ? `${styles.hamburger + ' ' + styles.active}` : `${styles.hamburger}`}
                id="hamburger"
                onClick={toggleMenuMode}>
                <svg viewBox="0 0 800 600">
                    <defs>
                        <linearGradient id="stripes"
                                        x1="0" y1="0" x2="100%" y2="50%">
                            <stop stopColor="hsl(45,100%,65%)" offset="0"/>
                            <stop stopColor="hsl(320,100%,65%)" offset="50%"/>
                            <stop stopColor="hsl(200,100%,60%)" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          className={styles.top}/>
                    <path d="M300,320 L540,320" className={styles.middle}/>
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          className={styles.bottom}
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "/>
                </svg>
            </div>
            <div className={isMenuOpen ? `${styles.hamburgerMenu + ' ' + styles.active}` : `${styles.hamburgerMenu}`}
                 onClick={toggleMenuMode}>
                <div><a href="/">Главная</a></div>
                <div><a href="/">Статьи</a></div>
                <div><a href="/">О сайте</a></div>
            </div>
        </header>
    )
}
export default BurgerMenu