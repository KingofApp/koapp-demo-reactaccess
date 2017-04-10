
class Hello extends React.Component {
  handleClick (e) {
    
    //structureService access
    console.log("Structure Object config", React.koapp.structureService.get());

    //smartMethodService access
    var toSend = {
        amount: '1025',
        currency: 'EUR',
        country: 'es',
        description: 'Description'
      };
      React.koapp.smartMethodService.execute('payment', toSend).then(function(response) {
        console.log("Response", response);
      });
  }
  render() {
    console.log("React object", React);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(React);
    return React.createElement('div', {onClick: this.handleClick, style:{ cursor:'pointer'}}, `Trigger payment, ${this.props.toWhat}`);
  }
}


