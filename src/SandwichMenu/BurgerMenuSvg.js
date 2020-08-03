import React from "react";
import styles from "./svg.module.css";

const svgSprite = () => {
    return (
        <React.Fragment>
            <div className={styles.tpl_hamburger} id="sandwichmenu">
                <svg viewBox="0 0 800 600">
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          className={styles.top}/>
                    <path d="M300,320 L540,320" className={styles.middle}/>
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          className={styles.bottom}
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "/>
                </svg>
            </div>
            <div className={styles.js_menu}>
               <span>Главная</span>
            </div>
        </React.Fragment>
    )
}
export default svgSprite