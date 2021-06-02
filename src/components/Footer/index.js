import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-item">
				<div className="phone-background">
					<img
						className="phone"
						src="https://img.icons8.com/ios-filled/24/ec3237/phone.png"
					/>
				</div>
				<p>
					Toll free <b>1800 200 1234</b>
				</p>
			</div>
			<div className="footer-item">
				<img src="https://img.icons8.com/android/30/ffffff/facebook-new.png" />
				<p>www.facebook.com/cripumps</p>
			</div>
			<div className="footer-item">
				<img
					className="globe"
					src="https://img.icons8.com/ios/30/ec3237/globe--v1.png"
				/>
				<p>www.crigroups.com</p>
			</div>
		</div>
	);
};

export default Footer;
