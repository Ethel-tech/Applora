const CustomButton = ({
	btnText = "",
	onClick = () => {},
	bgColor = "",
	txtColor = "",
	border = "",
	fontSize = "",
	width,
	type,
	paddingLeft,
	paddingRight,
}) => {
	return (
		<button
			type={type}
			className=" p-3 hover:opacity-90 hover:font-bold rounded-md"
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				color: txtColor,
				border: border,
				fontSize: fontSize,
				width: width,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
			}}
		>
			{btnText}
		</button>
	);
};

export default CustomButton;
