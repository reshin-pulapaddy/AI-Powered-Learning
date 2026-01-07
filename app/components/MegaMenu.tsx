'use client';

import { useState, useEffect, useRef } from 'react';
import productsData from '../data/products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  isNew: boolean;
  features: {
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
}

export default function MegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    productsData.products[0] as Product
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && productsData.products.length > 0) {
      setSelectedProduct(productsData.products[0] as Product);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const products = productsData.products as Product[];

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed left-1/2 -translate-x-1/2 z-40 bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 rounded-xl hidden md:block animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden"
      style={{ 
        top: '90px',
        width: '70%',
        height: '70vh',
        minWidth: '800px',
        maxWidth: '1200px'
      }}
      onMouseLeave={onClose}
    >
      <div className="h-full overflow-hidden flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 h-full">
          {/* Left Panel - Product Categories */}
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto custom-scrollbar">
            <div className="p-4">
              <div className="mb-4 px-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                  Explore Products
                </h3>
                <div className="h-1 w-12 bg-[#14467b] rounded-full"></div>
              </div>
              <div className="space-y-2">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    onMouseEnter={() => setSelectedProduct(product)}
                    className={`w-full text-left p-2.5 rounded-lg transition-all duration-200 ease-out relative group ${
                      selectedProduct?.id === product.id
                        ? 'bg-[#14467b] text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all ${
                        selectedProduct?.id === product.id
                          ? 'bg-white/20'
                          : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-[#14467b]/10'
                      }`}>
                        {product.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className={`font-semibold text-xs ${
                              selectedProduct?.id === product.id
                                ? 'text-white'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {product.name}
                          </span>
                          {product.isNew && (
                            <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold ${
                              selectedProduct?.id === product.id
                                ? 'bg-white/20 text-white'
                                : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            }`}>
                              New
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-[11px] leading-snug ${
                            selectedProduct?.id === product.id
                              ? 'text-blue-50'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Product Details */}
          <div className="p-8 overflow-y-auto custom-scrollbar h-full bg-white dark:bg-gray-800">
            {selectedProduct ? (
              <div
                key={selectedProduct.id}
                className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300"
              >
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#14467b] to-[#1a5a9a] flex items-center justify-center text-3xl shadow-lg">
                      {selectedProduct.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {selectedProduct.name}
                        </h2>
                        {selectedProduct.isNew && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>

                {selectedProduct.features.sections.length > 0 ? (
                  <div className="grid grid-cols-2 gap-6">
                    {selectedProduct.features.sections.map((section, index) => (
                      <div 
                        key={index} 
                        className={index % 2 === 0 ? 'pr-6 border-r border-gray-200 dark:border-gray-700' : 'pl-6'}
                      >
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                          <a 
                            href={`#${selectedProduct.id}-${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                            className="hover:text-[#14467b] dark:hover:text-blue-400 transition-colors"
                          >
                            {section.title}
                          </a>
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#14467b] dark:bg-blue-400"></span>
                              <a
                                href={`#${selectedProduct.id}-${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/\(/g, '').replace(/\)/g, '')}`}
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#14467b] dark:hover:text-blue-400 transition-colors"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <p>No features available for this product yet.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                Select a product to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

