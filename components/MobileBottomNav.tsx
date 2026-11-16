'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const NAV_ITEMS = [
  { href: '/', label: 'Home', iconActive: 'ri-home-5-fill', iconInactive: 'ri-home-5-line' },
  { href: '/shop', label: 'Shop', iconActive: 'ri-store-3-fill', iconInactive: 'ri-store-3-line' },
  {
    href: '/cart',
    label: 'Cart',
    iconActive: 'ri-shopping-bag-3-fill',
    iconInactive: 'ri-shopping-bag-3-line',
    badgeKey: 'cart' as const,
  },
  {
    href: '/wishlist',
    label: 'Saved',
    iconActive: 'ri-heart-3-fill',
    iconInactive: 'ri-heart-3-line',
    badgeKey: 'wishlist' as const,
  },
  { href: '/account', label: 'Account', iconActive: 'ri-user-3-fill', iconInactive: 'ri-user-3-line' },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [mounted, setMounted] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const nav = (
    <nav className="lg:hidden mobile-bottom-nav-fixed" aria-label="Mobile navigation">
      <div className="mobile-bottom-nav-dock px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-1">
        <div className="mobile-bottom-nav-glass grid grid-cols-5 rounded-[1.35rem] px-1 py-1 border border-white/50">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const badge =
              item.badgeKey === 'cart' ? cartCount : item.badgeKey === 'wishlist' ? wishlistCount : 0;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center min-h-[52px] rounded-2xl transition-all duration-300 active:scale-95 ${
                  active ? 'text-brand-rose' : 'text-brand-plum/40'
                }`}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                {active && (
                  <span
                    className="absolute inset-1 rounded-2xl bg-brand-rose/[0.08]"
                    aria-hidden
                  />
                )}

                <div className="relative z-[1] flex items-center justify-center w-8 h-8">
                  <i
                    className={`${active ? item.iconActive : item.iconInactive} text-[22px] leading-none`}
                  />
                  {badge > 0 && (
                    <span className="absolute -top-0.5 -right-1.5 min-w-[14px] h-[14px] bg-brand-rose text-white text-[8px] font-bold rounded-full flex items-center justify-center px-0.5">
                      {badge > 99 ? '99+' : badge}
                    </span>
                  )}
                </div>

                <span
                  className={`relative z-[1] text-[9px] font-semibold mt-0.5 tracking-[0.06em] ${
                    active ? 'text-brand-rose' : 'text-brand-plum/45'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );

  if (!mounted) return null;

  return createPortal(nav, document.body);
}
