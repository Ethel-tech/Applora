const CustomButton = ({
	btnText = "",
	onClick = () => {},
	bgColor = "",
	txtColor = "",
<<<<<<< HEAD
=======
	border = "",
	fontSize = "",
	width,
	type,
>>>>>>> 63358855fc5e6e93e4b27ce94fa7baebd23ebcd6
}) => {
	return (
		<button
			type={type}
			className=" p-2 hover:opacity-90 hover:font-bold rounded-md"
			onClick={onClick}
<<<<<<< HEAD
			style={{ backgroundColor: bgColor, color: txtColor }}
=======
			style={{
				backgroundColor: bgColor,
				color: txtColor,
				border: border,
				fontSize: fontSize,
				width: width,
			}}
>>>>>>> 63358855fc5e6e93e4b27ce94fa7baebd23ebcd6
		>
			{btnText}
		</button>
	);
};

export default CustomButton;
