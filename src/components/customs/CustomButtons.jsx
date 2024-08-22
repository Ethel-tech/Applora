const CustomButton = ({
	btnText = "",
	onClick = () => {},
	bgColor = "",
	txtColor = "",
	border = "",
	fontSize = "",
	width,
	type,
}) => {
	return (
		<button
			type={type}
			className=" p-2 hover:opacity-90 hover:font-bold rounded-md"
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				color: txtColor,
				border: border,
				fontSize: fontSize,
				width: width,
			}}
		>
			{btnText}
		</button>
	);
};

export default CustomButton;
