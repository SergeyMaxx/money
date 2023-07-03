import {createSlice} from '@reduxjs/toolkit'

const moneySlice = createSlice({
  name: 'money',
  initialState: {
    accounts: [],
    operations: [],
    transactions: [],
    categoryIn: [],
    categoryEx: []
  },
  reducers: {
    newAccount(state, action) {
      state.accounts.push(action.payload)
    },
    updateAccount(state, action) {
      const index = state.accounts.findIndex(a => a.id === action.payload.id)
      state.accounts[index] = {
        ...state.accounts[index],
        ...action.payload
      }
    },
    newOperations(state, action) {
      state.operations.push(action.payload)
    },
    newTransaction(state, action) {
      state.transactions.push(action.payload)
    },
    newCategoryIn(state, action) {
      state.categoryIn.push(action.payload)
    },
    newCategoryEx(state, action) {
      state.categoryEx.push(action.payload)
    }
  }
})

const {reducer} = moneySlice
const {
  newAccount,
  newOperations,
  newTransaction,
  newCategoryIn,
  newCategoryEx,
  updateAccount
} = moneySlice.actions

export const getAccounts = () => state => state.moneyReducer.accounts
export const getOperations = () => state => state.moneyReducer.operations
export const getTransactions = () => state => state.moneyReducer.transactions
export const getCategoryIn = () => state => state.moneyReducer.categoryIn
export const getCategoryEx = () => state => state.moneyReducer.categoryEx
export const createAccount = data => newAccount(data)
export const accountUpdate = data => updateAccount(data)
export const createOperations = data => newOperations(data)
export const createTransaction = data => newTransaction(data)
export const createCategoryIn = data => newCategoryIn(data)
export const createCategoryEx = data => newCategoryEx(data)

export default reducer