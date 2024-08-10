const CustomInput = ({
	label,
	type,
	txtCol = "",
	bgCol = "",
	placeholder = "",
	name,
}) => {
	return (
		<div className="flex flex-col space-y-2">
			<label className="text-base font-semibold">{label}</label>
			<input
				className=" border p-4 rounded-xl"
				type={type}
				style={{ color: txtCol, backgroundColor: bgCol }}
				placeholder={placeholder}
				name={name}
			/>
		</div>
	);
};

export default CustomInput;
