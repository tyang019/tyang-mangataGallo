import React from 'react';
import Button from './Button';

export interface BagItemType {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface BagItemProps {
  item: BagItemType;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

const BagItem: React.FC<BagItemProps> = ({ item, onQuantityChange, onRemove }) => {
  const total = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center gap-4 p-4 border-b">
      {item.image && (
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
      )}
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => onQuantityChange(Math.max(1, item.quantity - 1))}>-</button>
        <span className="px-3">{item.quantity}</span>
        <button onClick={() => onQuantityChange(item.quantity + 1)}>+</button>
      </div>

      <div className="w-24 text-right">
        <p className="font-semibold">${total}</p>
      </div>

      <Button variant="danger" size="sm" onClick={onRemove}>
        Remove
      </Button>
    </div>
  );
};

export default BagItem;