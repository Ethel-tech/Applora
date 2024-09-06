import { ErrorMessage, Field } from "formik";

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
			<Field
				name={name}
				type={type}
				placeholder={placeholder}
				className="font-bold placeholder:text-[#353535] lg:w-auto border p-3 "
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
			/>
			<ErrorMessage className="text-red-400" name={name} component="div" />
		</div>
	);
};

export default CustomInput;
