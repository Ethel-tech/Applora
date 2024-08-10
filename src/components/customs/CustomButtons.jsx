const CustomButton = ({
	btnText = "",
	onClick = () => {},
	bgColor = "",
	txtColor = "",
}) => {
	return (
		<button
			className="p-2 text-xl hover:opacity-90 hover:font-bold rounded-md"
			onClick={onClick}
			style={{ backgroundColor: bgColor, color: txtColor }}
		>
			{btnText}
		</button>
	);
};

export default CustomButton;
