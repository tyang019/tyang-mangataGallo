import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import Input from '../components/Input';
import Button from '../components/Button';
import BagItem, { BagItemType } from '../components/BagItem';

const Bag: React.FC = () => {
  const [bagItems, setBagItems] = useState<BagItemType[]>([]);
  const { values, errors, touched, handleChange, handleBlur, resetForm } = useFormValidation({
    itemName: '',
    price: '',
    quantity: '1',
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!values.itemName || !values.price || !values.quantity) {
      alert('Please fill in all fields');
      return;
    }

    const newItem: BagItemType = {
      id: Date.now().toString(),
      title: values.itemName,
      price: parseFloat(values.price),
      quantity: parseInt(values.quantity, 10),
    };

    setBagItems([...bagItems, newItem]);
    resetForm();
  };

  const handleRemoveItem = (id: string) => {
    setBagItems(bagItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setBagItems(
      bagItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const totalPrice = bagItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Bag</h1>

      {/* Form to Add Items */}
      <form onSubmit={handleAddItem} className="status-card">
        <h2 className="text-xl font-semibold mb-4">Add Item to Bag</h2>
        
        <Input
          label="Item Name"
          name="itemName"
          value={values.itemName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.itemName}
          touched={touched.itemName}
          placeholder="e.g., Diamond Ring"
        />

        <Input
          label="Price"
          name="price"
          type="number"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.price}
          touched={touched.price}
          placeholder="e.g., 299.99"
          step="0.01"
        />

        <Input
          label="Quantity"
          name="quantity"
          type="number"
          value={values.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.quantity}
          touched={touched.quantity}
          placeholder="e.g., 1"
          min="1"
        />

        <Button type="submit" variant="primary">
          Add to Bag
        </Button>
      </form>

      {/* Bag Items List */}
      {bagItems.length === 0 ? (
        <p className="text-gray-600 text-center py-8">Your bag is empty</p>
      ) : (
        <>
          <div className="bg-white rounded border">
            {bagItems.map(item => (
              <BagItem
                key={item.id}
                item={item}
                onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
                onRemove={() => handleRemoveItem(item.id)}
              />
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 p-4 bg-gray-50 rounded text-right">
            <p className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="secondary">Continue Shopping</Button>
            <Button variant="primary" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Bag;