function InputOptions(initialOption) {
    let _option = initialOption;

    this.getOption = () => _option;
    this.setOption = (opt) => _option = opt;
}

const inputOptions = new InputOptions(true);
export default inputOptions;