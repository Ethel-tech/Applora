const CustomInput = ({
	label,
	type,
	txtCol = "",
	bgCol = "",
	placeholder = "",
	name,
	paddingLeft,
	paddingRight,
	borderWidth,
	borderStyle,
	borderCol,
	borderRad,
}) => {
	return (
		<div className="flex flex-col ">
			<label className="text-base font-semibold">{label}</label>
			<input
				className="font-bold placeholder:text-[#353535] lg:w-auto border p-3 "
				type={type}
				style={{
					color: txtCol,
					backgroundColor: bgCol,
					paddingLeft: paddingLeft,
					paddingRight: paddingRight,
					borderWidth: borderWidth,
					borderColor: borderCol,
					borderStyle: borderStyle,
					borderRadius: borderRad,
				}}
				placeholder={placeholder}
				name={name}
			/>
		</div>
	);
};

export default CustomInput;
