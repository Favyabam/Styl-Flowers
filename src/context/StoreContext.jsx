import { createContext, useEffect, useState } from "react";
import { flower_list } from "../assets/assets"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    

    const [cartItems, setCartItems] = useState(()=>{
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : {};
    });

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev=>({...prev,[itemId]:1})))
        }
        else {
            setCartItems((prev=>({...prev,[itemId]:prev[itemId]+1})))
        }
    }

    const removeFromCart = (itemId) => {
         setCartItems((prev=>({...prev,[itemId]:prev[itemId]-1})))
    }

    //  Sync to localStorage on change

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0) {
                let itemInfo = flower_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }


    const contextValue = {
        flower_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
    
}

export default StoreContextProvider