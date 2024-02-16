'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu';

export function TravelersDropdown() {
  const [position, setPosition] = React.useState('bottom');
  const [adultQuantity, setAdultQuantity] = React.useState(1);
  const [kindQuantity, setKidQuantity] = React.useState(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            'w-full h-full justify-start text-left font-medium p-4 text-xl text-muted-foreground'
          )}
          variant="outline"
        >
          Travelers & Class
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[285px]">
        <DropdownMenuLabel className={cn('text-teal-500 -mb-4')}>Travelers</DropdownMenuLabel>
        <div className="p-2">
          <ul>
            <li className="flex items-center justify-between gap-6">
              <div>
                <h4 className="text-gray-500">Adults</h4>
                <p className="text-xs">12 years and above</p>
              </div>
              <div className="flex items-center border-gray-100 my-4 text-lg gap-3">
                <button
                  className="cursor-pointer rounded-l bg-gray-200 h-full p-2 duration-100 disabled:opacity-30 disabled:cursor-default"
                  onClick={() => setAdultQuantity((prev) => prev - 1)}
                  disabled={adultQuantity === 1 && true}
                >
                  -
                </button>
                <p>{adultQuantity}</p>
                <button
                  className="cursor-pointer rounded-r bg-gray-200 h-full p-2 duration-100"
                  onClick={() => setAdultQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </li>
            <li className="flex items-center justify-between gap-6">
              <div>
                <h4 className="text-gray-500">Children </h4>
                <p className="text-xs">5 years - under 12 years</p>
              </div>
              <div className="flex items-center border-gray-100 my-4 text-lg gap-3">
                <button
                  className="cursor-pointer rounded-l bg-gray-200 h-full p-2 duration-100 disabled:opacity-30 disabled:cursor-default"
                  onClick={() => setKidQuantity((prev) => prev - 1)}
                  disabled={kindQuantity === 1 && true}
                >
                  -
                </button>
                <p>{kindQuantity}</p>
                <button
                  className="cursor-pointer rounded-r bg-gray-200 h-full p-2 duration-100"
                  onClick={() => setKidQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </li>
          </ul>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className={cn('text-teal-500')}>Booking Class</DropdownMenuLabel>
        <div className="p-2 pb-6 grid grid-cols-2 gap-6">
          <div class="flex items-center">
            <input
              id="checkbox"
              type="checkbox"
              class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500  focus:ring-2"
            />
            <label for="checkbox" class="ms-2 text-sm font-medium text-gray-900 ">
              Economy
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="checkbox-2"
              type="checkbox"
              class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500  focus:ring-2"
            />
            <label for="checkbox-2" class="ms-2 text-sm font-medium text-gray-900 ">
              Business
            </label>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
