interface ButtonProps {
    emphasis?: 'high' | 'medium' | 'low';
}

const Button = ({...props}: JSX.IntrinsicElements['button'] & ButtonProps): JSX.Element => {
    const styles = {
        high: 'bg-indigo-500 text-indigo-50 font-semibold px-4 py-1 rounded-full hover:bg-indigo-600 shadow-md text-sm transition',
        medium: 'bg-indigo-50 text-indigo-400 font-semibold px-4 py-1 rounded-full hover:bg-indigo-100 shadow-md text-sm transition',
        low: '',
    };

    return (
        <button type="button" {...props} className={`${styles[props.emphasis ?? 'high']} ${props.className ?? ''}`} />
    );
};

Button.defaultProps = {
    emphasis: 'high',
};

export default Button;
