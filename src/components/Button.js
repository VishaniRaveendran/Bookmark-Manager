import Button from "@mui/material/Button";

const ResuableButton = (props) => {
    return (
        <Button variant={props.buttonVariant}
            color={props.buttonColor}
            size={props.buttonSize}
            onClick={props.onClick}
            endIcon={props.icon}
            sx={props.buttonStyle}
        >
            {props.buttonText}
        </Button>
    )
}
export default ResuableButton;