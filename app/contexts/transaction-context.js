import { createContext, useReducer } from "react";
import dayjs from "dayjs";
export const TransactionContext = createContext(null);
export const TransactionDispatchContext = createContext(null);

export const TransactionProvider = ({ children, initialTransactions }) => {
  const [transactions, dispatch] = useReducer(
    transactionReducer,
    initialTransactions
  );

  return (
    <TransactionContext.Provider value={transactions}>
      <TransactionDispatchContext.Provider value={dispatch}>
        {children}
      </TransactionDispatchContext.Provider>
    </TransactionContext.Provider>
  );
};

const transactionReducer = (transactions, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...transactions,
        {
          id: action.id,
          user_id: action.user_id,
          amount: action.amount,
          date: action.date,
          type: action.type,
          description: action.description,
          category: action.category,
          updatedAt: action.updatedAt,
          createdAt: action.createdAt,
        },
      ];
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};
