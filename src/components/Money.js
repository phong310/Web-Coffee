const CurrentCyFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
});

const Money = (props) => {
    return CurrentCyFormatter.format(props.value);
}

export default Money