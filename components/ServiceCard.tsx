import React, { FunctionComponent } from "react";
import { IServices } from "../types";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
	service: { Icon, title, des },
}) => {
	console.log("TITLE", title);
	return (
		<div className="px-6 py-6">
			<div className="flex items-start space-x-3">
				<Icon className="w-8 h-8 mt-1 text-green-500" />
				<div className="flex-1">
					<h4 className="font-bold"> {title} </h4>
					<p className="font-light dark:text-textGray-200"> {des} </p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
