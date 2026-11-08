import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, setCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', address: '' });

  if (!isOpen) return null;

  // Calculate total price
  const subtotal = cart.reduce((acc, item) => {
    const cleanPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    const qty = item.quantity || 1;
    return acc + (cleanPrice * qty);
  }, 0);

  const shipping = subtotal > 0 ? 200 : 0;
  const total = subtotal > 0 ? subtotal + shipping : 0;

  const handleQuantityChange = (index, delta) => {
    const updated = [...cart];
    const newQty = (updated[index].quantity || 1) + delta;
    if (newQty > 0) {
      updated[index].quantity = newQty;
      setCart(updated);
    }
  };

  const handleRemoveItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      setCart([]); // Clear cart
      setOrderPlaced(false);
      setIsCheckingOut(false);
      onClose();
      alert('Order placed successfully! Our representative will call you for confirmation.');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b flex items-center justify-between bg-[#1a382b] text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h3 className="font-bold font-serif text-lg">Your Shopping Cart ({cart.length})</h3>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Success State */}
        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
            <h3 className="text-2xl font-bold text-[#1a382b]">Order Confirmed!</h3>
            <p className="text-xs text-gray-500">Thank you for shopping with Herbiotics. Your order is being processed for Cash on Delivery.</p>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Form View */
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b">
              <h4 className="font-bold text-sm text-[#1a382b]">Billing & Shipping Details</h4>
              <button onClick={() => setIsCheckingOut(false)} className="text-xs text-emerald-700 font-bold hover:underline">
                ← Back to Cart
              </button>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Amna Irfan"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="03001234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">City</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Jaranwala"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Complete Address</label>
                <textarea 
                  required 
                  rows="3"
                  placeholder="House #, Street name, Area"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                />
              </div>

              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-[11px] text-emerald-900 font-medium">
                Payment Method: <strong>Cash on Delivery (COD)</strong>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1a382b] hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all mt-4"
              >
                Place Order (Rs. {total.toLocaleString()})
              </button>
            </form>
          </div>
        ) : (
          /* Cart Items List View */
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-2">
                  <ShoppingBag className="w-12 h-12 stroke-[1]" />
                  <p className="text-sm font-medium">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <img src={item.img} alt={item.name} className="w-16 h-16 object-contain bg-white rounded-xl p-1 shrink-0 border" />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-gray-900 truncate">{item.name}</h4>
                      <span className="text-xs font-bold text-emerald-800">{item.price}</span>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border bg-white rounded-lg overflow-hidden">
                          <button onClick={() => handleQuantityChange(idx, -1)} className="px-2 py-0.5 text-xs font-bold bg-gray-100">-</button>
                          <span className="px-2.5 text-xs font-bold">{item.quantity || 1}</span>
                          <button onClick={() => handleQuantityChange(idx, 1)} className="px-2 py-0.5 text-xs font-bold bg-gray-100">+</button>
                        </div>

                        <button onClick={() => handleRemoveItem(idx)} className="text-rose-500 hover:text-rose-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer & Checkout Trigger */}
            {cart.length > 0 && (
              <div className="p-5 border-t bg-gray-50 space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold">Rs. {shipping}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t">
                    <span>Total Amount</span>
                    <span className="text-emerald-800">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-[#1a382b] hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}