import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface BagItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface BagState {
  items: BagItem[];
}

interface BagContextType {
  items: BagItem[];
  addItem: (item: BagItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

// Action types
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';

type BagAction =
  | { type: 'ADD_ITEM'; payload: BagItem }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } };

// Reducer function
const bagReducer = (state: BagState, action: BagAction): BagState => {
  switch (action.type) {
    case ADD_ITEM: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      // Add new item
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

// Provider Component
interface BagProviderProps {
  children: ReactNode;
}

export const BagProvider: React.FC<BagProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(bagReducer, { items: [] });

  const addItem = (item: BagItem) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <BagContext.Provider
      value={{
        items: state.items,
        addItem,
        updateQuantity,
        removeItem,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

// Custom Hook
export const useBag = (): BagContextType => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};