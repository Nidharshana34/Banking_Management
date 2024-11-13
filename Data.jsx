import React, { useEffect, useState } from "react";
import './Data.css';  

function Data() {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    id: "",
    accountHolder: "",
    accountNumber: "",
    balance: "",
  });

  useEffect(() => {
    fetch("/data.json")  
      .then((response) => response.json())
      .then((data) => setAccounts(data)) 
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  
  const handleInputChange = (e) => 
  {
    setNewAccount({...newAccount,[e.target.name]: e.target.value,});
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const addedAccount = {
      ...newAccount,
      id: accounts.length + 1,  
    };

    
    setAccounts([...accounts, addedAccount]);

    
    setNewAccount({
      id: "",
      accountHolder: "",
      accountNumber: "",
      balance: "",
    });
  };

  return (
    <div className="bank-container" style={{height:'500px',width:'800px'}}>
      <h1 className="bank-title">Bank Account Management</h1>

      
      {accounts.length > 0 ? (
        <table className="account-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Account Holder</th>
              <th>Account Number</th>
              <th>Balance (₹)</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.accountHolder}</td>
                <td>{account.accountNumber}</td>
                <td>{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="loading">Loading accounts...</p>
      )}

      
      <h2 className="add-account-title">Add New Account</h2>
      <form className="add-account-form" onSubmit={handleSubmit}>
        <label>
          Account Holder:
          <input
            type="text"
            name="accountHolder"
            placeholder="Enter account holder's name"
            value={newAccount.accountHolder}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Account Number:
          <input
            type="text"
            name="accountNumber"
            placeholder="Enter account number"
            value={newAccount.accountNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Balance:
          <input
            type="number"
            name="balance"
            placeholder="Enter initial balance"
            value={newAccount.balance}
            onChange={handleInputChange}
            required
          />
        </label>
        <br></br>
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
}

export default Data;
