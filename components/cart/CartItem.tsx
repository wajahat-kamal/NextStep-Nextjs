import { toggleCart } from "@/store/cart/cartSlice";
import { Shoe } from "@/types/Shoe";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface CartItemProps {
    item: Shoe;
    onIncrease: () => void;
    onDecrease: () => void;
    onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const slug = (slug: string): void => {
        dispatch(toggleCart())
        router.push(`/shopping/${slug}`)
    }

    return (
        <div className="flex items-center gap-3 py-2 border-b border-secondary/10 group">

            {/* Image */}
            <div className="w-16 h-16 shrink-0 overflow-hidden bg-white/5 border border-secondary/10">
                <Image
                    width={64}
                    height={64}
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-contain p-1"
                />
            </div>

            {/* Info */}
            <div onClick={() => slug(item.slug)} className="flex-1 min-w-0 cursor-pointer">

                {/* Brand */}
                <p className="text-[9px] uppercase tracking-widest text-secondary/60 font-bold mb-0.5">
                    {item.brand}
                </p>

                {/* Name */}
                <p className="text-xs text-white font-semibold leading-snug line-clamp-1 hover:underline">
                    {item.name}
                </p>

                {/* Price */}
                <p className="text-sm font-black text-white mt-1">
                    ${item.price * item.quantity}
                    <span className="text-[10px] text-white/30 font-normal ml-1">
                        ${item.price} × {item.quantity}
                    </span>
                </p>
            </div>

            {/* Right side — quantity + remove */}
            <div className="flex flex-col items-end gap-2 shrink-0">

                {/* Remove */}
                <button
                    onClick={onRemove}
                    className="text-white/20 hover:text-red-400 transition-colors duration-200 cursor-pointer"
                    aria-label="Remove item"
                >
                    <Trash2 size={18} />
                </button>

                {/* Quantity Controls */}
                <div className="flex items-center border border-secondary/20">
                    <button
                        onClick={onDecrease}
                        className="text-white/50 hover:text-white hover:bg-secondary/10 transition-colors p-1.5"
                        aria-label="Decrease quantity"
                    >
                        <Minus size={11} />
                    </button>
                    <span className="text-white text-xs font-bold px-2.5 min-w-8 text-center">
                        {item.quantity}
                    </span>
                    <button
                        onClick={onIncrease}
                        className="text-white/50 hover:text-white hover:bg-secondary/10 transition-colors p-1.5"
                        aria-label="Increase quantity"
                    >
                        <Plus size={11} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;