import React from "react";
import "./ProductsBody.css";

const ProductsBody = () => {
	return (
		<div className="productsbody-container">
			<p className="productsbody-heading">
				INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
				IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
				NATION.
			</p>
			<img
				className="products-img"
				src="asserts/3.png"
				alt="our products images"
			/>
			<p className="productsbody-sub-heading-below-img">
				Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
				Solar Systems - Motors
			</p>
			<p className="seperator"></p>
			<p className="productsbody-heading-bold">
				C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
			</p>
			<p className="productsbody-categories">
				CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
				WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span>{" "}
				SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE
				& DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE{" "}
				<span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR{" "}
				<span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING{" "}
				<span>|</span> AGRICULTURE & RESIDENTIAL
			</p>
		</div>
	);
};

export default ProductsBody;
