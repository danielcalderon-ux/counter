import React from "react";

//include images into your bundle
import { SimpleCounter } from "./counter.js";

//create your first component
export function Home() {
	return (
		<div className="">
			<SimpleCounter />
		</div>
	);
}
