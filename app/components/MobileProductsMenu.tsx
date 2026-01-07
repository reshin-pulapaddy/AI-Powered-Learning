'use client';

import Link from 'next/link';
import productsData from '../data/products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  isNew: boolean;
}

export default function MobileProductsMenu({ onClose }: { onClose: () => void }) {
  const products = productsData.products as Product[];

  return (
    <div className="space-y-2">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`#${product.id}`}
          className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
          onClick={onClose}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{product.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{product.name}</span>
                {product.isNew && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    New
                  </span>
                )}
              </div>
              <p className="text-xs text-white/80 mt-0.5">{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

