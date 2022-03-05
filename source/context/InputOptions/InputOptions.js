function InputOptions(initialOption) {
    let _option = initialOption;

    this.getOption = () => _option;
    this.setOption = (opt) => _option = opt;
    this.selectOption = () => {
        const option = this.getOptionElement();
        option.setAttribute('selected','selected');
        return null;
    }
    this.getOptionElement = () => {
        return _option
               ?document.querySelector('#coord')
               :document.querySelector('#city');
    }
}

const inputOptions = new InputOptions(true);
export default inputOptions;