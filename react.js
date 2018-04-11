class App extends React.Component{
    constructor(){
        super();
        this.state={
            depositAmount: 0,
            error: false
        }
        _.bindAll(
        this,
        'renderDeposits',
        'action',
        'creditCardNumber',
        'creditCardName',
        'creditCardExpiry',
        'creditCardCVC',
        'depositFunds')
    }
    componentDidMount(){

    }
    action(amount){
        this.setState({depositAmount: amount})
    }
    renderDeposits(){
        const desposits = ['5', '10', '20', '40', '250', '1000']
        return deposits.map((amount) => {
            let classNames= "despoit-buttons"
            if(this.state.depositAmount === amount){
                classNames = 'deposit-button-selected'
            }
            return(
            <div className={classNames}
                onClick={() => this.action(amount)}>
             ${amount}
            </div>
            )
        })
    }
    creditCardNumber(event){
        this.setState({creditCardNumber: event.target.value})
    }
     creditCardName(event){
            this.setState({creditCardName: event.target.value})
        }
     creditCardExpiration(event){
            this.setState({creditCardExpiration:    event.target.value})
        }
     creditCardCVC(event){
            this.setState({creditCardCVC:    event.target.value})
        }
  render(){
      <div className="main">
          <div className="inner">
            <h1 className='header'>Deposit Funds</h1>
            <div className='subhead'>$123,456 won in the last 24 hours</div>
            <div className="creditCard">
                <div className="amounts">
                    {this.renderDeposits()}
                </div>

  }
}
