import React, {Component} from 'react'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            depositAmount: 0,
            error: false
        }
    }
    componentDidMount(){

    }

    click(){
      alert('This form doesnt actually deposit funds but it would have if it was a real form')
    }
    action(amount){
        this.setState({depositAmount: amount})
    }
    renderDeposits(){
        const deposits = ['5', '10', '20', '40', '250', '1000']
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
    newCreditCardNumber(event){
        this.setState({creditCardNumber: event.target.value})
    }
     newCreditCardName(event){
            this.setState({creditCardName: event.target.value})
        }
     newCreditCardExpiry(event){
            this.setState({creditCardExpiration:    event.target.value})
        }
     newCreditCardCVC(event){
            this.setState({creditCardCVC:    event.target.value})
        }
    render(){

      return(
        <div className="main">
          <div className="inner">
            <h1 className='header'>Deposit Funds</h1>
            <div className='subhead'>$123,456 won in the last 24 hours</div>
            <div className="creditCard">
              <div className="amounts">
                  {this.renderDeposits()}
              </div>
              <div className="creditCardNumberContainer">
                <input className="creditCardNumberInput" type="text" placeholder="Credit Card Number"
                value={this.state.creditCardNumber}
                onChange={this.newCreditCardNumber}/>
              </div>
              <div className="creditCardInformation">
                <input className="nameOnCard" type="text" placeholder="Cardholders Name" value={this.state.creditCardName} onChange={this.newCreditCardName}/>
                <input className="expiryOnCard" type="text" placeholder="Card Expiry MM/YY" value={this.state.creditCardExpiry} onChange={this.newCreditCardExpiry}/>
                <input className="cardCVC" type="text" placeholder="CVC" value={this.state.creditCardCVC} onChange={this.newCreditCardCVC}/>
              </div>
              <button className="depositFunds" onClick={this.click}>Deposit Funds</button>
              </div>
            </div>
          </div>
        );
  }
}
export default App;
