function InputOptions(initialOption) {
    let _option = initialOption;

    this.getOption = () => _option;
    this.setOption = (opt) => _option = opt;
    this.selectOption = () => {
        let option;
        if (_option) {
            option = document.querySelector('#coord');
        } else {
            option = document.querySelector('#city');
        }
        option.setAttribute('selected','selected');
        return null;
    }
}

const inputOptions = new InputOptions(true);
export default inputOptions;