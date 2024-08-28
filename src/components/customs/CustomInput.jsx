const CustomInput = ({
	label,
	type,
	txtCol = "",
	bgCol = "",
	placeholder = "",
	name,
	paddingLeft,
	paddingRight,
}) => {
	return (
		<div className="flex flex-col ">
			<label className="text-base font-semibold">{label}</label>
			<input
				className="font-bold lg:w-96 border p-3  rounded-md"
				type={type}
				style={{
					color: txtCol,
					backgroundColor: bgCol,
					paddingLeft: paddingLeft,
					paddingRight: paddingRight,
				}}
				placeholder={placeholder}
				name={name}
			/>
		</div>
	);
};

export default CustomInput;
