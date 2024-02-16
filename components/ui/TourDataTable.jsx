import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export function TourDataTable({ flightData, message }) {
  return (
    <>
      {!flightData?.length ? (
        <p className="text-center">Search to see available flights</p>
      ) : (
        <>
          <p className="mb-3">{message}</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Flight</TableHead>
                <TableHead>Aircraft</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Flare</TableHead>
                <TableHead>Route</TableHead>
                <TableHead className="w-[150px]">Departure</TableHead>
                <TableHead className="w-[150px]">Arrival</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flightData?.map((flight, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <ul className="flex flex-col">
                      <li>
                        {flight?.itineraries[0]?.segments[0]?.marketingCarrier}{' '}
                        {flight?.itineraries[0]?.segments[0]?.aircraft}
                      </li>
                      <li>
                        {' '}
                        {flight?.itineraries[0]?.segments[0]?.carrierCode}{' '}
                        {flight?.itineraries[0]?.segments[1]?.aircraft}
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="flex flex-col">
                      <li>{flight?.itineraries[0]?.segments[0]?.flightNumber} </li>
                      <li>{flight?.itineraries[0]?.segments[1]?.flightNumber}</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="flex flex-col">
                      {flight?.class[0]?.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="flex flex-col">
                      {flight?.fareBasis[0]?.map((fare, i) => (
                        <li key={i}>{fare}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    {flight?.itineraries?.flatMap((itinerary, i) => (
                      <li className="flex flex-col">
                        <span key={i}>
                          {itinerary?.segments[0]?.departure?.iataCode} -{' '}
                          {itinerary?.segments[0]?.arrival?.iataCode}
                        </span>
                        <span>
                          {itinerary?.segments[1]?.departure?.iataCode} -{' '}
                          {itinerary?.segments[1]?.arrival?.iataCode}
                        </span>
                      </li>
                    ))}
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <ul className="flex flex-col">
                      <li>{flight?.itineraries[0]?.segments[0]?.departure?.at}</li>
                      <li>{flight?.itineraries[0]?.segments[1]?.departure?.at}</li>
                    </ul>
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <ul className="flex flex-col">
                      <li>{flight?.itineraries[0]?.segments[0]?.arrival?.at}</li>
                      <li>{flight?.itineraries[0]?.segments[1]?.arrival?.at}</li>
                    </ul>
                  </TableCell>
                  <TableCell>{flight?.itineraries[0]?.duration}</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <span>{flight?.price}</span>
                      <button className="px-4 py-1.5 text-base bg-teal-600 text-white rounded-md font-medium w-fit">
                        Select
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
}
