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
	borderRad,
	disabled,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className="h-full p-3 hover:opacity-90 hover:font-bold rounded-md"
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				color: txtColor,
				border: border,
				borderRadius: borderRad,
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
