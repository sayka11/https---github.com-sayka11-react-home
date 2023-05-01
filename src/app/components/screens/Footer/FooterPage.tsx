import React from "react";
import "./styles.css";
import odigoLogo from "../../../../assets/Images/odigo-Logo.svg"



export const FooterPage = () => {
    return (
        <div className="footer">
            <div className="footer-image">
                <img className="logo-2" src={odigoLogo} alt="odigo-logo" />
            </div><div className="footer-txt">
                <div className="f-txt-1">
                    <div>Company</div>
                    <div>About</div>
                    <div>Team</div>
                    <div>Careers</div>
                    <div>Privacy Policy</div>
                </div>

                <div className="f-txt-2">
                    <div>Locations</div>
                    <div>Tokyo</div>
                    <div>Kyoto</div>
                    <div>Osaka</div>
                    <div>Hokkaido</div>
                </div>

                <div className="f-txt-3">
                    <div>Social Media</div>
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                    <div>Youtube</div>
                </div>
            </div></div>)
}
