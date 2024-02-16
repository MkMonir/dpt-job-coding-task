'use client';

import TopTabBar from '@/components/ui/TopTabBar';
import { TourDataTable } from '@/components/ui/TourDataTable';
import { DatePickerWithRange } from '@/components/ui/datePicker';
import { TravelersDropdown } from '@/components/ui/travelarsDropdown';
import Data from '@/data.json';
import { useState } from 'react';

export default function Home() {
  const [flightData, setFlightData] = useState([]);

  return (
    <div className="bg-gray-50">
      {/* <DatePickerWithRange /> */}
      <div className="min-h-screen h-full">
        <div className="container py-16">
          <TopTabBar />
          <div className="max-w-7xl mx-auto bg-white rounded-md p-8 shadow-md">
            {/* SEARCH FORM */}
            <form
              className="grid grid-cols-2 gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setFlightData(Data?.flightOffer);
              }}
            >
              {/* FROM TO */}
              <div className="flex items-center gap-3 relative">
                <button
                  type="button"
                  className="p-4 border border-gray-300 rounded-lg text-xl font-medium w-full text-left text-gray-500"
                >
                  LHR
                </button>
                <button
                  type="button"
                  className="p-4 border border-gray-300 rounded-lg text-xl font-medium w-full text-left text-gray-500"
                >
                  CDG
                </button>
              </div>

              {/* DATEPICKER */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <DatePickerWithRange />
                </div>

                {/* TRAVELERS AND CLASS DROPDOWN */}
                <div className="relative w-full">
                  <TravelersDropdown flightData={flightData} />
                </div>
              </div>
              <div>
                <h2 className="text-sm font-medium">
                  NOTE: Just Submit The Form To See Flight Data
                </h2>
                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="px-6 py-3 text-xl bg-teal-600 text-white rounded-md font-medium w-fit"
                >
                  Search
                </button>
              </div>
            </form>

            {/* DATA TABLE */}
            <div className="mt-12">
              <TourDataTable flightData={flightData} message={Data?.message} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
